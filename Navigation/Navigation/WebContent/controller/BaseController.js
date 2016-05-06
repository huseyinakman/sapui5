sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/ui/core/routing/History"
], function(Controller, History) {
	"use strict";
	return Controller.extend("sap.ui.demo.nav.controller.BaseController", {
		getRouter: function() {
			return sap.ui.core.UIComponent.getRouterFor(this);
		},
		onNavBack: function() {

			this.getRouter().navTo("Selection", {}, true /*no history*/ );
			// 			var oHistory, sPreviousHash;
			// 			oHistory = History.getInstance();
			// 			sPreviousHash = oHistory.getPreviousHash();
			// 			if (sPreviousHash !== undefined) {
			// 				window.history.go(-1);
			// 			} else {
			// 				this.getRouter().navTo("selection", {}, true /*no history*/ );
			// 			}
		}
	});
});