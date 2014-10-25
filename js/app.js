(function () {
   "use strict";

    angular
        .module("buggyApp",[])
        .controller("mainController",mainController);

    function mainController(){
        var buggy = this;

        buggy.buttonTypes = [

            {
                "bootstrap" : "btn btn-default",
                "friendly" : "DEFAULT"

            },
            {
                "bootstrap" : "btn btn-primary",
                "friendly" : "PRIMARY"

            },
            {
                "bootstrap" : "btn btn-alert",
                "friendly" : "ALERT"

            },
            {
                "bootstrap" : "btn btn-danger",
                "friendly" : "DANGER"

            },
            {
                "bootstrap" : "btn btn-info",
                "friendly" : "INFO"

            }

        ];

        buggy.friendlyLabel = function (buttonStyle) {

            var objectToReturn = buttonStyle + " is not a bootstrap class";

            for (var i = 0; i < buggy.buttonTypes.length; i++) {
                if(buggy.buttonTypes[i].bootstrap == buttonStyle){
                    objectToReturn = buggy.buttonTypes[i].friendly;
                }
            }
            return objectToReturn;
        }
    }

}());