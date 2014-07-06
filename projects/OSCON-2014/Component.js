jQuery.sap.declare("oscon2014.Component");

sap.ui.core.UIComponent.extend("oscon2014.Component", {

	createContent : function() {

		// create root view
		var oView = sap.ui.view({
			id : "app",
			viewName : "oscon2014.view.App",
			type : "JS",
			viewData : { component : this }
		});

		// Using a local model for offline development
		var oModel = new sap.ui.model.json.JSONModel("model/mock.json");
		oView.setModel(oModel);

		// done
		return oView;
	}
});