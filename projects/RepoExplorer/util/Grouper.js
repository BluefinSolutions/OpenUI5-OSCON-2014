jQuery.sap.declare("oscon2014.repoexplorer.util.Grouper");

oscon2014.repoexplorer.util.Grouper = {

	bundle : null, // somebody has to set this

	LifecycleStatus : function (oContext) {
		var status = oContext.getProperty("LifecycleStatus");
		var text = oscon2014.repoexplorer.util.Grouper.bundle.getText("StatusText" + status, "?");
		return {
			key: status,
			text: text
		};
	},

	GrossAmount : function (oContext) {
		var price = oContext.getProperty("GrossAmount");
		var currency = oContext.getProperty("CurrencyCode");
		var key = null,
			text = null;
		if (price <= 5000) {
			key = "LE10";
			text = "< 5000 " + currency;
		} else if (price > 5000 && price <= 10000) {
			key = "LE100";
			text = "< 10.000  " + currency;
		} else if (price > 10000) {
			key = "GT100";
			text = "> 10.000 " + currency;
		}
		return {
			key: key,
			text: text
		};
	}
};