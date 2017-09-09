'use strict';

pizzaApp.directive('carousel', function() {
    return {
        restrict: 'E',
        templateUrl: "./js/directives/carousel.tmpl.html",
        scope: false,
        link: function(scope, element, attr, controller) {
            element.find('#theCarousel').carousel();
        }
    }
});