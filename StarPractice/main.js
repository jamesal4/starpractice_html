define([], function() {
	
	var starpractice_state;

	function init_starpractice_state() 
	{
		var state = {};
		state.width = 300;
		state.height = 300;
		state.color = "green";
		state.debug = false;
		state.addSelectionOptions = false;
		state.serverURL = "http://chemapps.stolaf.edu/jmol/jsmol/jsmol.php";
		state.use = "HTML5";
		state.j2sPath = "jsmol/j2s";
		state.readyFunction = jmol_isReady;
		state.script = "set antialiasDisplay;load jsmol/data/caffeine.mol;";
		state.disableJ2SLoadMonitor = true;
		state.disableInitialConsole = true;
		
		state.toggle = true;
		state.element_id = "StarX_";
		state.element_id_starpractice = state.element_id + "_starpractice";
		state.element_id_starpractice_jmol = state.element_id + "_starpractice_jmol";
		state.element_id_starpractice_ui = state.element_id + "_starpractice_ui";
		state.element_id_starpractice_ui_button = state.element_id + "_starpractice_ui_button";
		return state;
	}

	function parse_config(config_obj) 
	{
		alert("main.parse_config(" + config_obj + ")");
		starpractice_state = init_starpractice_state();
		if(starpractice_state)
		{
			starpractice_state.element_id = config_obj.element_id;
			starpractice_state.width = config_obj.width ? config_obj.width : 300;
			starpractice_state.height = config_obj.height ? config_obj.height : 300;
			starpractice_state.color = config_obj.color ? config_obj.color : "green";
			starpractice_state.debug = false;
		}
		else
		{
			console.log("starpractice_state is not initialized by parse_config");
		}
	}

	jmol_isReady = function(applet) 
	{
		if (starpractice_state)
		{
			var ui = $('#' + starpractice_state.element_id_starpractice_ui);
			ui.append(" <button id='" + starpractice_state.element_id_starpractice_ui_button + "'>starpractice_button</button>");
			initialize_starpractice_UI_Behavior();
			initialize_starpractice_UI_LAF();
		}
		else
		{
			console.log("starpractice_state is not initialized");
		}
	}

	function initialize_starpractice_UI_Behavior()
	{
		var button = $('#' + starpractice_state.element_id_starpractice_ui_button);
		button.click(
			function() 
			{
				var viewer = starpractice_state.jsmol;
				if(starpractice_state.toggle) {
					starpractice_state.toggle = false;
					Jmol.script (viewer, "select *; rotate;");
					Jmol.script (viewer, "select *; isosurface vdw;");		
				}
				else {
					starpractice_state.toggle = true;
					Jmol.script (viewer, "select *; rotate 0;");
					Jmol.script (viewer, "select *; isosurface DELETE;");
				};
			}
		);
	}
	
	function initialize_starpractice_UI_LAF() 
	{
		var viewer = starpractice_state.jsmol;
		var button_addr = '#' + starpractice_state.element_id_starpractice_ui_button;
		var button = $(button_addr);

		var starpractice_addr = '#' + starpractice_state.element_id_starpractice;
		var starpractice = $(starpractice_addr);
		starpractice.append("<style>" + starpractice_addr + " {border:'1px blue solid';}</style>");

		var ui = $('#' + starpractice_state.element_id_starpractice_ui);
		ui.append("<style>" + button_addr + " {background-color:rgba(0,122,0,0.6); position:absolute; top:10px; left:10px;}</style>");
	}

	function initialize_UI()
	{
		var element = $('#' + starpractice_state.element_id);
		element.append("<span id='" + starpractice_state.element_id_starpractice + "'></span>");

		var starpractice = $('#' + starpractice_state.element_id_starpractice);
		starpractice.data("starpractice_state", starpractice_state);
		starpractice.append('<script type="text/javascript" src="jsmol/js/JSmoljQuery.js"></script> <script type="text/javascript" src="jsmol/js/JSmolCore.js"></script> <script type="text/javascript" src="jsmol/js/JSmol.js"></script> <script type="text/javascript" src="jsmol/js/JSmolApplet.js"></script> <script type="text/javascript" src="jsmol/js/JSmolControls.js"></script> <script type="text/javascript" src="jsmol/js/JSmolApi.js"></script> <script type="text/javascript" src="jsmol/js/j2sjmol.js"></script>');
		starpractice.append("<span id='" + starpractice_state.element_id_starpractice_jmol + "'></span>");
		starpractice.append("<span id='" + starpractice_state.element_id_starpractice_ui + "'></span>");

//		alert("main.initialize_UI() adding Jmol");
		Jmol.setXHTML( starpractice_state.element_id_starpractice_jmol ) ;
		starpractice_state.jsmol = Jmol.getApplet(starpractice_state.element_id_jmol, starpractice_state);
//		alert("main.initialize_UI() starpractice.html: " + starpractice.html);
	}

	
return {
	configure: function( config ) {
//		alert("main.configure id:" + config.element_id);
		parse_config(config);
		initialize_UI();
//		alert("main.configure is complete");
	},
}});
