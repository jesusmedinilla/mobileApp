'use strict';

angular.module('mobileappApp')
    .factory('Register', function ($resource) {
        return $resource('api/register', {}, {
        });
    });


