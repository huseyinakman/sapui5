sap.ui.define([
	"sap/ui/demo/nav/controller/BaseController"
], function(Controller) {
	"use strict";

	return Controller.extend("sap.ui.demo.nav.controller.Details", {
		onInit: function() {
			var oRouter = this.getRouter();
			oRouter.getRoute("detail").attachMatched(this._onRouteMatched, this);
			// Hint: we don't want to do it this way
			/*
			oRouter.attachRouteMatched(function (oEvent){
				var sRouteName, oArgs, oView;
				sRouteName = oEvent.getParameter("name");
				if (sRouteName === "employee"){
					this._onRouteMatched(oEvent);
				}
			}, this);
			*/
		},
		_onRouteMatched: function(oEvent) {
				var oView = this.getView();
				this.getView().bindElement({
					path: "/" + oEvent.getParameter("arguments").contextPath.replace(/\./, "/"),
					model: "odata"
				});
			}
	});
});