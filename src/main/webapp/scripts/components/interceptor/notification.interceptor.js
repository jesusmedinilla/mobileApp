 'use strict';

angular.module('mobileappApp')
    .factory('notificationInterceptor', function ($q, AlertService) {
        return {
            response: function(response) {
                var alertKey = response.headers('X-mobileappApp-alert');
                if (angular.isString(alertKey)) {
                    AlertService.success(alertKey, { param : response.headers('X-mobileappApp-params')});
                }
                return response;
            }
        };
    });
