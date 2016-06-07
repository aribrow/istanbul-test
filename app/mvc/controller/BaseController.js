sap.ui.define(["sap/ui/core/mvc/Controller"],
    function(Controller) {

        var BaseController = Controller.extend("com.test.main.mvc.controller.BaseController", {

            onInit: function() {
                return true;
            }

        });

        return BaseController;
    }, true);
