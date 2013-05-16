starpractice_html
=================

StarPractice is an educational tool that uses Deliberate Practice, Gap Analysis, and Critical Thinking exercises to help individuals improve their performance. 


To use starx you need the following (StarPractice example):

	starx
		- src
			-- index.html (an example of how to start your star widget (e.g. StarPractice))
			-- ... (other definitions of star widgets)
			-- StarPractice.js (definition of StarPractice star widget)
			-- StarX
				... (other star widgets )
	
	StarPractice (JavaScript for loading JSmol and creating StarPractice UI)
		- main.js
		- other supporting js files for StarPractice
		- jsmol (essential stuff for JSmol)
			-- data (files that can be loaded by JSmol
			-- j2s (Jmol files converted to JavaScript)
			-- js (essential stuff)
			-- Jmol.properties
			-- JSmol.min.core.js
			-- JSmol.min.js)
	phonegap (Java and JavaScript for running apps in Android phone)
		- assets (various resources)
			-- www (the point



Techniques:

DEBUGGING:

Used to determine if the starx configuration was loading StarPractice
$('#' + config.element_id).html(StarPractice ? "Loading StarPractice" : "Failed initializing StarPractice");


CODING CONVENTIONS:

This example can be used in Star<widget>/main.js. Note use of try/catch
	function parse(str)
	{
		try {
			var json = "{" + str.substr(2,str.length-4) + "}" ;
			var data = JSON.parse(json);
			console.info( data ) ;  
		} catch(e) {
			return "STARX: ERROR PARSING: " + str.substr(2,str.length-4) + ":ERROR PARSING :STARX" ;
		}
	}
			
			
