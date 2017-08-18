'use strict';

pizzaApp.factory('getData', function($http, $log) {
    return {
        getJsonData: function(file, successFun) {
            var url = 'files/' + file + '.json';
            $http.get(url).then(function(data, status, headers, config) {
                successFun(data);
            }, function(data, status, headers, config) {
                $log.warn(data, status, headers, config);
            });
        }
    }
});