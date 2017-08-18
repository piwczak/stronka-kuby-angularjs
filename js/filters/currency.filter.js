'use strict';

pizzaApp.filter('currencyComma', function() {
    return function(value) {
        return value.toString().replace('.', ',');
    }
});