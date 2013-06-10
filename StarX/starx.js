$(function(){
	window._starx_debug = [] ;
	var base_url = '';
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
		var head = document.getElementsByTagName('head')[0];
    	var script = document.createElement('script');
		var url = base_url + 'StarX/require.js';
 		script.src = url;
		head.appendChild(script);
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
//			if(window.requirejs) {
//				requirejs.config({
//					baseUrl: base_url 
//			});
//			alert("starx.parse() id: " + data.StarX);
			require( ["StarX/"+data.StarX] , function( StarX ) { 
//				alert("starx.parse() in require: " + data.StarX);
				StarX.configure(data);
//				alert("starx.parse() returning from call to " + data.StarX + ".configure(" + data + ")");
			} ) ;
//			alert("starx.parse() IS RETURNING id: " + id);
//			return "<span id='"+id+"'>" + str.substr(2, str.length - 4 ) + "</span>";
			return "<span id='"+id+"'></span>";
//			} else {
//				alert("starx.parse() REQUIRE NOT THERE");
//				return "REQUIRE NOT THERE" ;
//			}
		} catch(e) {
//			alert("starx.parse() ERROR PARSING: " + str.substr(2,str.length-4) + ":ERROR PARSING");
			return "STARX: ERROR PARSING: " + str.substr(2,str.length-4) + ":ERROR PARSING :STARX" ;
		}
	}

	function test_and_add( element , elements )
	{
		if( $(element).parents().filter('.editor').length == 0 )
		{
			elements.push( element ) ;
//			alert("\nstarx.test_and_add() element: " + element);
		}
	}

	var in_load = false;
	function load() 
	{
		if( in_load ) { return ; }
		in_load = true;
		var elements = [];
		var list = $("*:contains('{[\"StarX\":')");
		for( var i = 1 ; i < list.length ; i++ )
		{
			if(! list[i-1].contains(list[i]) )
			{
				test_and_add( list[i-1] , elements ) ;
			}
		}
		test_and_add( list[list.length-1] , elements ) ;
		$(elements).each( function() {
			var element = $(this);
			var html = element.html();
			window._starx_debug.push( element ) ;
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
//						alert("starx.load() splits[" + i + "]: " + splits[i]);
						new_html += parse(splits[i]);
//						alert("after parse starx.load() splits[" + i + "]: " + splits[i]);

					}
					else
					{
						new_html += splits[i] ;
					}
				}
				element.html( new_html ) ;
			}
				
		});
		in_load = false;
	}
	
	function bind()
	{
		$('body').bind( 'DOMNodeInserted' , function(e) {
			load();
		});
		load();
	}
	
	load_require_js(bind);

});

