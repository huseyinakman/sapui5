sap.ui.define([
	"sap/ui/demo/nav/controller/BaseController"
], function(BaseController) {
	"use strict";
	return BaseController.extend("sap.ui.demo.nav.controller.EmployeeList", {
	    onListItemPressed : function(oEvent){
			var oItem, oCtx;
			oItem = oEvent.getSource();
			var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
//			oCtx = oItem.getBindingContext("odata");
			oRouter.navTo("employee",{
				prodid : oItem.getBindingContext("odata").getPath().substr(1).replace(/\//,".")
			});
		}
	    
	});
});