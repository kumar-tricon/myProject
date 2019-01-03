sap.ui.define(["sap/ui/core/mvc/Controller"],
function(Controller){
    "use strict";
    return Controller.extend("root.controller.App",{
        handleNav: function(){
            var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
			oRouter.navTo("p1");
        }
    });    
})