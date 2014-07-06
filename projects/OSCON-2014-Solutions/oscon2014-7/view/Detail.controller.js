jQuery.sap.require("oscon2014.util.Formatter");

sap.ui.controller("oscon2014.view.Detail", {

	handleNavButtonPress : function (evt) {
		this.nav.back("Master");
	},

	onBeforeRendering:function(){
		this.byId("SupplierForm").bindElement("BusinessPartner");
	}
	
});