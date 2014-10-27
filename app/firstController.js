/**
 * Created by buggy on 10/25/14.
 */
(function () {
   angular
       .module("buggyApp")
       .controller('firstController',firstController);

    function firstController(dataProvider){
        var first = this;
        first.data = dataProvider;
    }

}());