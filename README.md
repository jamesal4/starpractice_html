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
				require.js
				starx.js
				StarPractice.js (index.html tells StarX to load this star widget. StarPractice.js tells StarX where the StarPractice main.js is. 
				... (other star widgets )
	
	StarPractice (JavaScript for creating StarPractice UI)
		- main.js
		- other supporting js files for StarPractice
		
	TODO: Stuff from StarBiochem that should be replaced by StarPractice functionality
		- index.html (need to replace this StarBiochem index.html with one for StarPractice)
		- jsmol (essential stuff for JSmol)
			-- data (files that can be loaded by JSmol
			-- j2s (Jmol files converted to JavaScript)
			-- js (essential stuff)
			-- Jmol.properties
			-- JSmol.min.core.js
			-- JSmol.min.js)	


Techniques:

DEBUGGING:

Used to determine if the starx configuration was loading StarPractice
$('#' + config.element_id).html(StarPractice ? "Loading StarPractice" : "Failed initializing StarPractice");


CODING CONVENTIONS:

http://javascript.crockford.com/code.html (not a perfect coding style, but a start)
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
			
			
THINGS TO EXPLORE

1. PhoneGap Build
	http://phonegap.com/blog/2013/02/18/getting-started-with-phonegap-and-phonegap-build/
	http://tv.adobe.com/watch/building-mobile-apps-with-phonegap-build/introduction-to-phonegap-build-building-your-first-app/
2. Cordova in Eclipse
	http://cordova.apache.org/docs/en/2.5.0/guide_getting-started_android_index.md.html#Getting%20Started%20with%20Android
3a. Sending Text Messages from your StarPractice to yourself w/ phone# and carrier
	http://benchmarkreviews.com/?id=21269&Itemid=38&option=com_content&task=view 
	http://www.daniweb.com/web-development/coldfusion/threads/16344/send-a-text-message-to-your-phone-from-your-site
	http://www.livejournal.com/tools/textmessage.bml?mode=details
	http://stackoverflow.com/questions/4367225/sending-sms-to-mobile-phones-via-javascript
3b. Sending email from phonegap
	http://stackoverflow.com/questions/14040371/sending-email-using-phonegap
3c. Notification services
	http://stackoverflow.com/questions/13506899/custom-push-notification-to-mobile-devices
	android: http://developer.android.com/google/gcm/index.html
	ios: http://developer.apple.com/library/mac/#documentation/NetworkingInternet/Conceptual/RemoteNotificationsPG/Introduction.html
	http://twitter.github.io/bootstrap/
4. Running apps in both desktop browsers and mobile devices
	http://stackoverflow.com/questions/6159712/phonegap-web-app-in-regular-desktop-browsers
	http://bricklin.com/html5gap.htm - "no UI"
5. UI Frameworks (JQuery Mobile and Sencha Touch)
	JQuery Plugin: http://twitter.github.io/bootstrap/
6. UI requirements (Apple App Store)
7. UI Widgets
	time:  			http://www.simile-widgets.org/ (Timeline - not sure how to use this, but it is a scaffold for memorization.)
	space: 			Map of where things happened.
	concepts:		Named things to be remembered
	concept map:	How named things are related
	
	StarORF
		