'use strict';

pizzaApp.directive('dishMenu', function () {
    return {
        restrict: 'E',
        templateUrl: "/js/directives/dishMenu.tmpl.html",
        scope: false,
        controller: ['$scope', 'getData', function ($scope, getData) {
            getData.getJsonData('zestawy', function (data) {
                $scope.listOfDishes = data.data;
                angular.forEach($scope.listOfDishes, function(element) {
                     var numOfProp = Object.keys(element).length;
                     element.numOfProp = numOfProp;
                });
            });
        }]
    }
});