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

		// set i18n model
		var i18nModel = new sap.ui.model.resource.ResourceModel({
			bundleUrl : "i18n/messageBundle.properties"
		});
		oView.setModel(i18nModel, "i18n");

		// Using a local model for offline development
		var oModel = new sap.ui.model.json.JSONModel("model/mock.json");
		oView.setModel(oModel);

		// set device model
		var deviceModel = new sap.ui.model.json.JSONModel({
			isPhone : jQuery.device.is.phone,
			listMode : (jQuery.device.is.phone) ? "None" : "SingleSelectMaster",
			listItemType : (jQuery.device.is.phone) ? "Active" : "Inactive"
		});
		deviceModel.setDefaultBindingMode("OneWay");
		oView.setModel(deviceModel, "device");

		// done
		return oView;
	}
});