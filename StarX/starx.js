alert("Top of starx.js");
$(function(){
	alert("Top of $(function()... parse starx.js");
	window._starx_debug = [] ;
	//var base_url = 'http://starapp.mit.edu/test/';
	var base_url = 'http://localhost:8002/StarX/';
	function wait_for_require(callback)
	{
		setTimeout( function() {
			if( typeof(requirejs)=='function' )
			{
				callback();
			} else {
				wait_for_require(callback);
			}
		}, 20 ) ;
	}
	
	function load_require_js(callback)
	{
		alert("top of load_require_js");
		var head = document.getElementsByTagName('head')[0];
		alert("after head load_require_js head:\n" + head);
    		var script = document.createElement('script');
		var url = base_url + 'require.js';
    	alert("after url load_require_js url:\n" + url);
		script.src = url;
		head.appendChild(script);
	   	alert("after head.append load_require_js script:\n" + script);
//		document.body.appendChild(script);
		wait_for_require(callback);
	}

	function parse(str)
	{
		try {
			var json = "{" + str.substr(2,str.length-4) + "}" ;
			var data = JSON.parse(json);
			var id = "STARX_"+Math.round(1000000*Math.random());
			data.element_id = id ;
			if(window.requirejs) {
			requirejs.config({
				baseUrl: base_url 
			});
			require( [data.StarX] , function( StarX ) { 
				StarX.configure(data);

			} ) ;
//			return "<span id='"+id+"'>" + str.substr(2, str.length - 4 ) + "</span>";
			return "<span id='"+id+"'></span>";
			} else {
				return "REQUIRE NOT THERE" ;
			}
		} catch(e) {
			return "STARX: ERROR PARSING: " + str.substr(2,str.length-4) + ":ERROR PARSING :STARX" ;
		}
	}

	function test_and_add( element , elements )
	{
		if( $(element).parents().filter('.editor').length == 0 )
		{
			elements.push( element ) ;
		}
	}

	var in_load = false;
	function load() 
	{
		alert("top of load() in starx.js");
		if( in_load ) { return ; }
		in_load = true;
		var elements = [];
		var list = $("*:contains('{[\"StarX\":')");
		console.info( "in load"  ) ;
		for( var i = 1 ; i < list.length ; i++ )
		{
			if(! list[i-1].contains(list[i]) )
			{
				test_and_add( list[i-1] , elements ) ;
			}
		}
		test_and_add( list[list.length-1] , elements ) ;
		alert("in load() in starx.js");
		$(elements).each( function() {
			var element = $(this);
			var html = element.html();
			alert("in load() before window push in starx.js html:\n" + html);
			window._starx_debug.push( element ) ;
			alert("in load() after window push in starx.js");
			if( html != null && html.indexOf( ']}' ) != -1 )
			{
				var matches = html.match( '(\\{\\["StarX":[^\\]]*\\]\\})' );
				var splits = html.split( /(\{\["StarX":.*\]\})/ );
				window._starx_debug.push(splits) ;
				var new_html = '' ;
				for( var i = 0 ; i < splits.length ; i++ )
				{
					if( splits[i].indexOf( '{["StarX":' ) >= 0 )
					{
						console.info("Am I here?")
						new_html += parse(splits[i]);
					}
					else
					{
						console.info("Am I there?")
						new_html += splits[i] ;
					}
				}
				alert("in load() after window push in starx.js new_html:\n" + new_html);
				element.html( new_html ) ;
			}
				
		});
		in_load = false;

	}
	
	function bind()
	{
		alert("top of bind in starx.js");
		$('body').bind( 'DOMNodeInserted' , function(e) {
			alert("In body.bind function in starx.js e.target:\n" + e.target + " changed.");
			console.info( 'element' , e.target , ' changed.' ) ;
			load();
		});
		alert("second load of bind in starx.js");
		load();
		alert("finished bind in starx.js");
	}
	alert("Start starx.js");
	load_require_js(bind);

});

