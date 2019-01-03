sap.ui.jsview("root.view.p1", {

	getControllerName : function() {
		return "root.controller.p1";
	},

	createContent : function(oController) {
		this.setDisplayBlock(true);
	    return new sap.m.Text({text:"page 1"});
	}

});