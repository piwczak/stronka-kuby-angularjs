'use strict';

pizzaApp.directive('navigation', function ($window, $document, $timeout, $q) {
    return {
        restrict: 'E',
        templateUrl: "/js/directives/navigation.tmpl.html",
        scope: {},
        link: function (scope, element, attr, controller) {
            var headerOffset = 300;
            var timeoutId;
            var elem = element.find('.scroll-navbar');

            var navbarOnScrolling = function () {
                var scrollY = $window.pageYOffset;

                if (scrollY >= headerOffset) {
                    elem.addClass('shrink-navbar');
                } else {
                    elem.removeClass('shrink-navbar');
                }
            }

            angular.element($window).on('scroll', function () {
                timeoutId = $timeout(navbarOnScrolling, 250);
            });

            element.on('$destroy', function () {
                $timeout.cancel(timeoutId);
            });
        }
    }
});