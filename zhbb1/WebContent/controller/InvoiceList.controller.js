sap.ui.define([ "sap/ui/core/mvc/Controller", "sap/ui/model/json/JSONModel",
		"sap/ui/demo/wt/model/formatter", "sap/ui/model/Filter",
		"sap/ui/model/FilterOperator" ], function(Controller, JSONModel,
		formatter, Filter, FilterOperator) {
	"use strict";

	return Controller.extend("sap.ui.demo.wt.controller.InvoiceList", {
		formatter : formatter,
		onInit : function() {
			var oViewModel = new JSONModel({
				currency : "EUR"
			});
			this.getView().setModel(oViewModel, "view");
		},
		onFilterInvoices : function(oEvent) {
			// build filter array
			var aFilter = [];
			var sfilter = this.getView().byId("filterid").getValue();
//			var sQuery = oEvent.getParameter("query");
			if (sfilter) {
				aFilter.push(new Filter("ProductName", FilterOperator.Contains, sfilter));
			}

			// filter binding
			var oList = this.getView().byId("invoiceList");
			var oBinding = oList.getBinding("items");
			oBinding.filter(aFilter);
		},
		onPress: function (oEvent) {
			var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
			oRouter.navTo("detail");
		}

	});
});