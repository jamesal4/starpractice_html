define([], function() {
	
	var starpractice_state;

	function init_starpractice_state() 
	{
		var state = {};
		state.element_id = "StarX_";
		state.junk1 = "Default Junk1";
		state.junk2 = "Default Junk2";
		state.junk3 = "Default Junk3";
		return state;
	}

	function parse_config(config_obj) 
	{
		// alert("main.parse_config(" + config_obj + ")");
		starpractice_state = init_starpractice_state();
		if(starpractice_state)
		{
			starpractice_state.element_id = config_obj.element_id;
			starpractice_state.junk1 = config_obj.junk1;
			starpractice_state.junk2 = config_obj.junk2;
			starpractice_state.junk3 = config_obj.junk3;
		}
		else
		{
			alert("starpractice_state is not initialized by parse_config");
		}
	}

	function initialize_UI()
	{
		var element = $('#' + starpractice_state.element_id);
		element.append("<span id='" + starpractice_state.element_id_starpractice + "' height=500 color='green'></span>");

		var starpractice = $('#' + starpractice_state.element_id_starpractice);
		starpractice.data("starpractice_state", starpractice_state);
		starpractice.append("<span id='" + starpractice_state.element_id_starpractice_ui + "'></span>");

			starpractice.append(" <textarea id='text' rows=4 cols=50>Type here</textarea>");
			starpractice.append(" <textarea id=fileName' rows=1 cols=25>Name your file here</textarea>");
			starpractice.append(" <input type='button' id='authorizeButton' style='display:block' value='Authorize' />");
			starpractice.append(" <input type='button' id='saveButton' style='display:block' value='Save To Drive' />");
      		window['handleClientLoad'+starpractice_state.element_id] = handleClientLoad;
			alert("about to load google");
			starpractice.append(' <script type="text/javascript" src="https://apis.google.com/js/client.js?onload=handleClientLoad'+starpractice_state.element_id+'"></script>');
			alert("loaded to load google");
	}


      var CLIENT_ID = '223733049388-f547eova8cklqmmodmqnmjq9m20qepka.apps.googleusercontent.com';
      var SCOPES = 'https://www.googleapis.com/auth/drive';
      
      function myFunction()
      {
      	alert("in myFunction");
      	console.log("in the function");
      }

      //Called onload; begins authorization process
      function handleClientLoad() 
      {
      	delete window['handleClientLoad'+starpractice_state.element_id];
      	alert("in handleclientload");
      	console.log("in handleclientload");
        window.setTimeout(checkAuth, 1);
      }

      //Continues authorization
      function checkAuth() 
      {
      	alert("in checkAuth");
      	console.log("in checkAuth");
        gapi.auth.authorize(
            {'client_id': CLIENT_ID, 'scope': SCOPES, 'immediate': true},
            handleAuthResult);
            
      }

	  //If access token received, program can begin its functionality; else, it tries to authorize again
      function handleAuthResult(authResult) 
      {
      	console.log("in handleAuthResult");
        var authButton = document.getElementById('authorizeButton');
        var saveButton = document.getElementById('saveButton');
        authButton.style.display = 'none';
        saveButton.style.display = 'none';
        
        if (authResult && !authResult.error) 
        {
          // Access token has been successfully retrieved, requests can be sent to the API.
          console.log("in the if statement in auth result");
          saveButton.style.display = 'block';
          saveButton.onclick = uploadFile;
          
        } 
        
        else 
        {
          // No access token could be retrieved, show the button to start the authorization flow.
          console.log("handle auth result else statement");
          authButton.style.display = 'block';
          authButton.onclick = function() 
          {
          	console.log("set auth button up");
              gapi.auth.authorize(
                  {'client_id': CLIENT_ID, 'scope': SCOPES, 'immediate': false},
                  handleAuthResult);
          };
        }
      }

      //Starts upload of file
      function uploadFile() 
      {
      	console.log("uploading");
      	
        gapi.client.load('drive', 'v2', insertFile);
        
        console.log("end of uploadfile");
      }

      //Uploads file
      function insertFile(callback) 
      {
      	console.log("in insertFile");
        const boundary = '-------314159265358979323846';
        const delimiter = "\r\n--" + boundary + "\r\n";
        const close_delim = "\r\n--" + boundary + "--";

       
        var contentType = 'application/octet-stream';
        title = document.getElementById("fileName").value + ".txt";
        var metadata = 
        {
        	
            'title': title,
            'mimeType': contentType
        }

          var base64Data = btoa(document.getElementById("text").value);
          
          console.log(base64Data);
          
          var multipartRequestBody =
              delimiter +
              'Content-Type: application/json\r\n\r\n' +
              JSON.stringify(metadata) +
              delimiter +
              'Content-Type: ' + contentType + '\r\n' +
              'Content-Transfer-Encoding: base64\r\n' +
              '\r\n' +
              base64Data +
              close_delim;

          var request = gapi.client.request({
              'path': '/upload/drive/v2/files',
              'method': 'POST',
              'params': {'uploadType': 'multipart'},
              'headers': 
              {
                'Content-Type': 'multipart/mixed; boundary="' + boundary + '"'
              },
              'body': multipartRequestBody});
          if (!callback) 
          {
          	console.log("we are in not callback");
            callback = function(file) 
            {
              console.log(file)
            };
          }
          request.execute(callback);
       }
      
return {
	configure: function( config ) {
//		alert("main.configure id:" + config.element_id);
		parse_config(config);
		initialize_UI();
//		alert("main.configure is complete");
	},
}});
