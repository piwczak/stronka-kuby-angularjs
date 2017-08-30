'use strict';

pizzaApp.controller('MainController', ['$scope', '$window', '$document', function ($scope, $window, $document) {
    var vm = this;

    var windowWidth = angular.element($window).width();
    var offset = 0;

    if (windowWidth <= 360) {
        offset = 170;
    }
    else if (windowWidth > 360 && windowWidth <= 768) {
        offset = 145;
    } else {
        offset = 125;
    }

    angular.element('body').scrollspy({
        target: '.navbar',
        offset: offset
    });

}]);