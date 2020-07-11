/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"fi/pms/solution/ZFI_PMS_SOL/test/unit/AllTests"
	], function () {
		QUnit.start();
	});
});