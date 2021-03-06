'use strict';

pizzaApp.directive('foodMenu', function() {
    return {
        restrict: 'E',
        templateUrl: "/js/directives/foodMenu.tmpl.html",
        scope: false,
        controller: ['$scope', 'getData',function($scope, getData) {
            getData.getJsonData('dania', function(data) {
               $scope.listOfFood = data.data;
            });
        }]
    }
});