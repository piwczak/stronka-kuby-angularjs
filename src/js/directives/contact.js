'use strict';

pizzaApp.directive('contact', function () {
    return {
        restrict: 'E',
        templateUrl: "./js/directives/contact.tmpl.html",
        scope: false,
        controller: ['$scope', '$timeout', function($scope, $timeout){
            this.initMap = function () {
                var latLang = { lat: 50.175347, lng: 20.236888 }
                var mapSettings = {
                    center: latLang,
                    zoom: 10
                };
                var map = new google.maps.Map(angular.element('#map')[0], mapSettings);

                var markerSettings = {
                    position: latLang,
                    map: map,
                    title: 'Pizzeria u Jakuba'
                }

                var infoWindow = new google.maps.InfoWindow({
                    content: '<b>Pizzeria u Jakuba</b><br/>Posądza 95A<br/>32-104 Proszowice'
                });

                var marker = new google.maps.Marker(markerSettings);
                marker.addListener('click',
                    function () {
                        marker.setAnimation(google.maps.Animation.BOUNCE);
                        $timeout(function () {
                            marker.setAnimation(null);
                            infoWindow.open(map, marker);
                        },
                            700);

                    });

                var circleBorder = new google.maps.Circle({
                    strokeColor: '#ff0000',
                    strokeOpacity: 0.2,
                    strokeWeight: 2,
                    fillColor: '#ff0000',
                    fillOpacity: 0.2,
                    map: map,
                    center: latLang,
                    radius: 7500
                });
            };
        }],
        link: function(scope, element, attr, controller) {
            controller.initMap();
        }
    }
});
