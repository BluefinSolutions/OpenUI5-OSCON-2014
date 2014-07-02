sap.ui.jsview("oscon2014.repoexplorer.view.App", {

	getControllerName: function () {
		return "oscon2014.repoexplorer.view.App";
	},
	
	createContent: function (oController) {
		
		// to avoid scroll bars on desktop the root view must be set to block display
		this.setDisplayBlock(true);
		
		// create app
		this.app = new sap.m.SplitApp();

		// load the master page
		var master = sap.ui.xmlview("Master", "oscon2014.repoexplorer.view.Master");
		master.getController().nav = this.getController();
		this.app.addPage(master, true);
		
		// load the empty page
		var empty = sap.ui.xmlview("Empty", "oscon2014.repoexplorer.view.Empty");
		this.app.addPage(empty, false);
		
		return this.app;
	}
});