sap.ui.define([
	"sap/ui/core/mvc/Controller"
], function (Controller) {
	"use strict";

	return Controller.extend("sap.ui.demo.wt.controller.home", {

		onOpenDialog : function () {
			this.getOwnerComponent().helloDialog.open(this.getView());
		}
	});

});