jQuery.sap.require("oscon2014.util.Formatter");

sap.ui.controller("oscon2014.view.Master", {

	handleListItemPress : function (evt) {
		var context = evt.getSource().getBindingContext();
		this.nav.to("Detail", context);
	}
});