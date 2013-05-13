
jmol_isReady = function(applet) {
	Jmol._getElement(applet, "appletdiv").style.border="1px solid blue"
}		

function getStarBiochem(viewer, info) {
	var viewer_addr= "#" + viewer;
	updateInfo(info);
	Jmol.getApplet(viewer, info);

	$(viewer_addr).append("<style>" + viewer_addr + " {background-color:rgba(122,122,0,0.5);position:absolute;top:0px;left:0px;}</style>HELLO WORLD");
	$(viewer_addr).append("<button id='starBiochemX_UI' onclick='javascript:onClickFunction(" + viewer + ")'>isosurface vdw 4 etc</button>");
	$(viewer_addr).append("<style>#starBiochemX_UI {background-color:rgba(0,0,122,0.1);position:absolute;top:100px;left:100px;}</style>");
	$('#starBiochemX_UI').css('z-index',2);
}

var toggle = true;
function onClickFunction(viewer) {
	if(toggle) {
		toggle = false;
		Jmol.script (viewer, "select *; rotate;");
		Jmol.script (viewer, "select *; isosurface vdw;");		
	}
	else {
		toggle = true;
		Jmol.script (viewer, "select *; rotate 0;");
		Jmol.script (viewer, "select *; isosurface DELETE;");
	}
		
}

function updateInfo(info) {
	if(info) {
//		console.log(info.color);
//		console.log(info.width);
//		console.log(info.height);
		info.debug = false;
		info.addSelectionOptions = false;
		info.serverURL = "http://chemapps.stolaf.edu/jmol/jsmol/jsmol.php";
		info.use = "HTML5";
		info.j2sPath = "jsmol/j2s";
		info.readyFunction = jmol_isReady;
		info.script = "set antialiasDisplay;load jsmol/data/caffeine.mol;";
		info.disableJ2SLoadMonitor = true;
		info.disableInitialConsole = true;
	}
	return;
}