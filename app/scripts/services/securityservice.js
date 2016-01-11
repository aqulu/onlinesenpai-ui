'use strict';

/**
 * @ngdoc service
 * @name onlinesenpaiUiApp.SecurityService
 * @description
 * # SecurityService
 * Service in the onlinesenpaiUiApp.
 */
angular.module('onlinesenpaiUiApp').service('SecurityService', function ($resource) {
    return $resource('/api/login', {}, {
        login: {
            method: 'POST'
        }
    });   
});
