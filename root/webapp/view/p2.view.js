sap.ui.jsview("root.view.p2", {

	getControllerName : function() {
		return "root.controller.p2";
	},

	createContent : function(oController) {
		this.setDisplayBlock(true);
	    return sap.m.Text({text:"page 2"});
	}

});