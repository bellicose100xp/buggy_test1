/**
 * Created by buggy on 10/25/14.
 */
(function () {

    angular
        .module("buggyApp")
        .controller('secondController',secondController);

    function secondController(dataProvider){
        var second = this;
        second.data = dataProvider;
    }

}());