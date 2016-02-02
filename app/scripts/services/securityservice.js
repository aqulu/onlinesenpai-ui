'use strict';

/**
 * @ngdoc service
 * @name onlinesenpaiUiApp.SecurityService
 * @description
 * # SecurityService
 * Service in the onlinesenpaiUiApp.
 */
angular.module('onlinesenpaiUiApp').service('SecurityService', function ($resource) {
    return $resource('/api/:page', {}, {
        login: {
            params: {
              page: 'login'
            },
            method: 'POST'
        },
        signup: {
            params: {
              page: 'signup'
            },
            method: 'PUT'
        }
    });
});
