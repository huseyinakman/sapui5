sap.ui.define([
	"sap/ui/demo/nav/controller/BaseController"
], function(Controller) {
	"use strict";

	return Controller.extend("sap.ui.demo.nav.controller.Master", {
		onInit: function() {
			var filters = [];
			var searchString = this.getView().byId("searchField").getValue();
		},
		onSearch: function() {
			// add filter for search
			var filters = [];
			var searchString = this.getView().byId("searchField").getValue();
			if (searchString && searchString.length > 0) {
				filters = [new sap.ui.model.Filter("ProductName", sap.ui.model.FilterOperator.Contains, searchString)];
			}
			// update list binding
			this.getView().byId("list").getBinding("items").filter(filters);
		},
		onSelect: function(oEvent) {
				var oItem, oCtx;
				oItem = oEvent.getSource();
				var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
				//			oCtx = oItem.getBindingContext("odata");
				oRouter.navTo("detail", {
					from: "master",
					contextPath: oItem.getBindingContext("odata").getPath().substr(1).replace(/\//, ".")
				});
			}
			/**
			 * Called when a controller is instantiated and its View controls (if available) are already created.
			 * Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
			 * @memberOf sap.ui.demo.nav.view.view.Master
			 */
			//	onInit: function() {
			//
			//	},

		/**
		 * Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
		 * (NOT before the first rendering! onInit() is used for that one!).
		 * @memberOf sap.ui.demo.nav.view.view.Master
		 */
		//	onBeforeRendering: function() {
		//
		//	},

		/**
		 * Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
		 * This hook is the same one that SAPUI5 controls get after being rendered.
		 * @memberOf sap.ui.demo.nav.view.view.Master
		 */
		//	onAfterRendering: function() {
		//
		//	},

		/**
		 * Called when the Controller is destroyed. Use this one to free resources and finalize activities.
		 * @memberOf sap.ui.demo.nav.view.view.Master
		 */
		//	onExit: function() {
		//
		//	}

	});

});