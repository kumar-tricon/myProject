sap.ui.define(["sap/ui/core/mvc/Controller"],
function(Controller){
    "use strict";
    return Controller.extend("root.controller.App",{
        /**
         * Navigates to a view.
         * @param {object} oEvent - press event object of the button.
         */
        handleNav: function(oEvent){
            var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
			oRouter.navTo(oEvent.getSource().data('target'));
        }
    });    
})