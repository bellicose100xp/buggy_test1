(function () {
    angular
        .module('buggyApp',["ui.router"])
        .controller('avengerController',avengerController)
        .filter('reverse',reverse)
        .config(function($stateProvider, $urlRouterProvider){
            $urlRouterProvider.otherwise('/');

            $stateProvider
                .state('home',{
                    url:'/',
                    templateUrl: 'home.html',
                    controller: 'avengerController as actors'
                })
        });


    function reverse(dataProvider) {
        return function (text) {
            return text.split(' ').reverse().join(' ') + ' ' + dataProvider.message;
        }
    }

    function avengerController(avenger){
        var actors = this;
        actors.cast = avenger;

        actors.placeLimit = 10;
        actors.limitsSelection = [1,2,3,4,5,6,7,8,9,10];

        actors.sortBy = "name";
        actors.sortDirection = "+";

        actors.sort = function(sortBy, sortDirection){
            return sortDirection + sortBy;
        }
    }




}());