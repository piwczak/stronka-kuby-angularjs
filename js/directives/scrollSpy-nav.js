'use strict';

pizzaApp.directive('scrollSpyNav', function ($window, $document, $timeout, $q) {
    return {
        restrict: 'A',
        link: function (scope, element) {
            element.find('nav a').on('click', function (event) {
                event.preventDefault();
                var eventTarget = angular.element(event.target);
                if (!eventTarget.is('a')) {
                    eventTarget = eventTarget.parent('a');
                }

                $q.when(element.find('.navbar-collapse.in').collapse('hide'))
                    .then(function () {
                        angular.element('body, html')
                            .stop()
                            .animate({
                                scrollTop: angular.element(eventTarget.attr('href')).offset().top - 100
                            }, 1500, 'easeInOutExpo');
                    });
            });
        }
    }
});