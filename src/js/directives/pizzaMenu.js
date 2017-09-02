'use strict';

pizzaApp.directive('pizzaMenu', function() {
    return {
        restrict: 'E',
        templateUrl: "/js/directives/pizzaMenu.tmpl.html",
        scope: false,
        controller: ['$scope', 'getData', function($scope, getData) {
            getData.getJsonData('pizza', function(data) {
               $scope.listOfPizza = data.data;
            });

             getData.getJsonData('dodatki', function(data) {
               $scope.listOfAdds = data.data;
            });
        }]
    }
});