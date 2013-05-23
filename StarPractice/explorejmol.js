define([], function() {
	
	function exploreJmol() 
	{
//		getProperty errorMessage
		myInfo = Jmol.getPropertyAsString(applet,"errorMessage");
		console.info("\n errorMessage");
		console.log(myInfo);

		console.info(">>>>>>>>>>>> jmol_isReady <<<<<<<<<<<<<<<<<");
//		getPropetyOptions include:

//			getProperty animationInfo
		var myInfo = Jmol.getPropertyAsString(applet,"animationInfo");
		console.info("\n animationInfo");
		console.log(myInfo);
		
//				getProperty appletInfo
		myInfo = Jmol.getPropertyAsString(applet,"appletInfo");
		console.info("\n appletInfo")
		console.log(myInfo);
		
//				getProperty atomInfo <atom selection> #default: (visible)
//		myInfo = Jmol.getPropertyAsArray(applet,"atomInfo","{*}");
//		myInfo = Jmol.getPropertyAsArray(applet,"atomInfo","{*.C}");
//		console.info("\n atomInfo");
//		console.log(myInfo[0]);
//		console.log(myInfo[0].spacefill);
//		console.log(myInfo[0].info);
		myInfo = Jmol.getPropertyAsString(applet,"atomInfo","{1:1}");
		console.info("\n atomInfo");
		console.log(myInfo[0]);
		console.log(myInfo[0].spacefill);
		console.log(myInfo[0].info);
//		console.log(Jmol.getValue(myInfo[0].spacefill,"My Bad");
		
//				setProperty(applet,"spacefill", "[THR]1:A.C", "0.8585");

		
		var viewer = starpractice_state.jsmol;
		Jmol.script (applet, "select " + myInfo[0].info + "; spacefill 0.8585;");

		myInfo = Jmol.getPropertyAsArray(applet,"atomInfo","{*.C}");
		console.log(myInfo[0]);
		console.log(myInfo[0].spacefill);
		
//				getProperty atomList <atom selection> #default: (visible)
//		myInfo = Jmol.getPropertyAsArray(applet,"atomList","{*}");
		myInfo = Jmol.getPropertyAsArray(applet,"atomList","{*}");
		console.info("\n atomList");
		console.log(myInfo);

//				getProperty auxiliaryInfo <atom selection> #default: {*} - nothing shows for example
//		myInfo = Jmol.getPropertyAsArray(applet,"auxiliaryInfo","{*}"); - shows nothing
		myInfo = Jmol.getPropertyAsString(applet,"auxiliaryInfo","{*}");
		console.info("\n auxiliaryInfo");
		console.log(myInfo);

//				getProperty bondInfo <atom selection> #default: (visible)
//		myInfo = Jmol.getPropertyAsArray(applet,"bondInfo","{*.C}");
//		myInfo = Jmol.getPropertyAsString(applet,"bondInfo","{*.C}");
//		myInfo = Jmol.getPropertyAsJSON(applet,"bondInfo","{*.C}");
		myInfo = Jmol.getPropertyAsArray(applet,"bondInfo","visible");
		console.info("\n bondInfo");
		console.log(myInfo);

//				getProperty boundBoxInfo
		myInfo = Jmol.getPropertyAsArray(applet,"boundBoxInfo");
		console.info("\n boundBoxInfo");
		console.log(myInfo);

//				getProperty centerInfo
		myInfo = Jmol.getPropertyAsArray(applet,"centerInfo");
		console.info("\n centerInfo");
		console.log(myInfo);

//				getProperty chainInfo <atom selection> #default: (visible)
		myInfo = Jmol.getPropertyAsArray(applet,"chainInfo","{*}");
		console.info("\n chainInfo");
		console.log(myInfo);

//				getProperty consoleText
		myInfo = Jmol.getPropertyAsArray(applet,"consoleText");
		console.info("\n consoleText");
		console.log(myInfo);

//				getProperty dataInfo <data type> #default: types
		myInfo = Jmol.getPropertyAsArray(applet,"dataInfo", "types");
		console.info("\n dataInfo");
		console.log(myInfo);

//				getProperty errorMessage
		myInfo = Jmol.getPropertyAsString(applet,"errorMessage");
		console.info("\n errorMessage");
		console.log(myInfo);

//				getProperty evaluate <expression>
		myInfo = Jmol.getPropertyAsString(applet,"evaluate", "1+2");
		console.info("\n evaluate");
		console.log(myInfo);

//				getProperty extractModel <atom selection> #default: (visible)
		myInfo = Jmol.getPropertyAsString(applet,"extractModel", "{*}");
		console.info("\n extractModel");
		console.log(myInfo);

//				getProperty fileContents
		myInfo = Jmol.getPropertyAsString(applet,"fileContents");
		console.info("\n fileContents");
		console.log(myInfo);

//				getProperty fileContents <pathname>
		myInfo = Jmol.getPropertyAsString(applet,"fileContents", "StarPractice/jsmol/data/1crn.pdb");
		console.info("\n fileContents");
		console.log(myInfo);

//				getProperty fileHeader
		myInfo = Jmol.getPropertyAsString(applet,"fileHeader");
		console.info("\n fileHeader");
		console.log(myInfo);

//				getProperty fileInfo <type>
		myInfo = Jmol.getPropertyAsString(applet,"fileInfo");
		console.info("\n fileInfo");
		console.log(myInfo);

//				getProperty fileName
		myInfo = Jmol.getPropertyAsString(applet,"fileName");
		console.info("\n fileName");
		console.log(myInfo);

//				getProperty image
		myInfo = Jmol.getPropertyAsString(applet,"image");
		console.info("\n image");
		console.log(myInfo);

//				getProperty isosurfaceData
		myInfo = Jmol.getPropertyAsString(applet,"isosurfaceData");
		console.info("\n isosurfaceData");
		console.log(myInfo);

//				getProperty isosurfaceInfo
		myInfo = Jmol.getPropertyAsString(applet,"isosurfaceInfo");
		console.info("\n isosurfaceInfo");
		console.log(myInfo);

//				getProperty jmolStatus statusNameList
		myInfo = Jmol.getPropertyAsString(applet,"jmolStatus", "*");
		console.info("\n jmolStatus");
		console.log(myInfo);

//				getProperty jmolViewer
		myInfo = Jmol.getPropertyAsString(applet,"jmolViewer");
		console.info("\n jmolViewer");
		console.log(myInfo);

//				getProperty jspecView <key>
		myInfo = Jmol.getPropertyAsString(applet,"jspecView");
		console.info("\n jspecView");
		console.log(myInfo);

//				getProperty ligandInfo <atom selection> #default: {*}
		myInfo = Jmol.getPropertyAsString(applet,"ligandInfo", "{0:20}");
		console.info("\n ligandInfo");
		console.log(myInfo);

//				getProperty measurementInfo
		myInfo = Jmol.getPropertyAsString(applet,"measurementInfo");
		console.info("\n measurementInfo");
		console.log(myInfo);

////				getProperty menu <type> #default: current - nothing is returned
//		myInfo = Jmol.getPropertyAsString(applet,"menu");
//		console.info("\n menu");
//		console.log(myInfo);

//				getProperty messageQueue
		myInfo = Jmol.getPropertyAsString(applet,"messageQueue");
		console.info("\n messageQueue");
		console.log(myInfo);
		
//				getProperty minimizationInfo
		myInfo = Jmol.getPropertyAsString(applet,"minimizationInfo");
		console.info("\n minimizationInfo");
		console.log(myInfo);
		
//				getProperty modelInfo <atom selection> #default: {*}
		myInfo = Jmol.getPropertyAsString(applet,"modelInfo", "{*}");
		console.info("\n modelInfo");
		console.log(myInfo);
		
//				getProperty moleculeInfo <atom selection> #default: (visible)
		myInfo = Jmol.getPropertyAsString(applet,"moleculeInfo", "{*}");
		console.info("\n moleculeInfo");
		console.log(myInfo);
		
//				getProperty mouseInfo
		myInfo = Jmol.getPropertyAsString(applet,"mouseInfo");
		console.info("\n mouseInfo");
		console.log(myInfo);
		
//				getProperty orientationInfo
		myInfo = Jmol.getPropertyAsString(applet,"orientationInfo");
		console.info("\n orientationInfo");
		console.log(myInfo);
		
//				getProperty pointGroupInfo <atom selection> #default: (visible)
		myInfo = Jmol.getPropertyAsString(applet,"pointGroupInfo");
		console.info("\n pointGroupInfo");
		console.log(myInfo);
		
//				getProperty polymerInfo <atom selection> #default: (visible)
		myInfo = Jmol.getPropertyAsString(applet,"polymerInfo");
		console.info("\n polymerInfo");
		console.log(myInfo);
		
//				getProperty shapeInfo 
		myInfo = Jmol.getPropertyAsString(applet,"shapeInfo");
		console.info("\n shapeInfo");
		console.log(myInfo);
		
//				getProperty stateInfo <state type> #default: all |  
		myInfo = Jmol.getPropertyAsString(applet,"stateInfo");
		console.info("\n stateInfo");
		console.log(myInfo);
		
//				getProperty transformInfo 
		myInfo = Jmol.getPropertyAsString(applet,"transformInfo");
		console.info("\n transformInfo");
		console.log(myInfo);
		
//				getValue
//		myInfo = Jmol.getPropertyAsString(applet, )
//		myInfo = Jmol.getValue(applet)
	}
	
return {
	explore: function() {
		explorejmol();
	},
}});
