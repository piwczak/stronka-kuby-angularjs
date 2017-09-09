'use strict';

pizzaApp.directive('promotion', function() {
    return {
        restrict: 'E',
        templateUrl: "./js/directives/promotion.tmpl.html",
        scope: false
    }
});