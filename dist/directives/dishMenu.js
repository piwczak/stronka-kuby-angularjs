"use strict";pizzaApp.directive("dishMenu",function(){return{restrict:"E",templateUrl:"/dist/directives/dishMenu.tmpl.html",scope:!1,controller:["$scope","getData",function(t,e){e.getJsonData("zestawy",function(e){t.listOfDishes=e.data,angular.forEach(t.listOfDishes,function(t){var e=Object.keys(t).length;t.numOfProp=e})})}]}});