sap.ui.define([
	"sap/ui/demo/nav/controller/BaseController"
], function(BaseController) {
	"use strict";

	return BaseController.extend("sap.ui.demo.nav.controller.Selection", {
		onInit: function() {
			var oModel = new sap.ui.model.json.JSONModel();
			oModel.loadData("/invoices.json");
			this.getView().setModel(oModel, "odata");
		},
		onDisplayNotFound: function(oEvent) {
			//display the "notFound" target without changing the hash
			this.getRouter().getTargets().display("notFound", {
				fromTarget: "selection"
			});
		},
		onNavToEmployees: function(oEvent) {
			this.getRouter().navTo("employeeList");
		},
		onPress: function(oEvent) {
		    
		    this.getRouter().navTo("master");
			/*			var view = this.getView();
						var lv_date_from = view.byId("date_from").getValue();
						var lv_date_to = view.byId("date_to").getValue();
						var lv_customer = view.byId("customer").getValue();
						//			var dateFormatted = dateFormat.format(date);
						//			var customer = view.byId("customer");

						/*			if (lv_date_from === "") {
										view.byId("date_from").setValueState(sap.ui.core.ValueState.Error); // if the field is empty after change, it will go red
									} else {
										this.getView().byId("date_from").setValueState(sap.ui.core.ValueState.None);
										if (lv_date_to === "") {
											view.byId("date_to").setValueState(sap.ui.core.ValueState.Error);
										} else {*/
			/*			this.getView().byId("date_to").setValueState(sap.ui.core.ValueState.None);*/
			/*			var la_filters = new Array();
						var lo_filt2 = new sap.ui.model.Filter({
							path: "Reqdelvdate",
							operator: sap.ui.model.FilterOperator.BT,
							value1: lv_date_from,
							value2: lv_date_to
						});
						var lo_filt1 = new sap.ui.model.Filter({
							path: "Customerid",
							operator: sap.ui.model.FilterOperator.EQ,
							value1: lv_customer
						});
						//			la_filters.push(lo_filt1);
						la_filters.push(lo_filt2);

						var sServiceUrl = "http://ar1s002a.eu.unilever.com:8009/sap/opu/odata/SAP/YR1_FIORI_002_SRV/";
						var oModel = new sap.ui.model.odata.ODataModel(sServiceUrl, true);
						oModel.read("/CustomerInfoSet", {
							filters: la_filters
						});*/
		}
	});
});