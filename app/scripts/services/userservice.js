'use strict';

/**
 * @ngdoc service
 * @name onlinesenpaiUiApp.UserService
 * @description
 * # UserService
 * Service in the onlinesenpaiUiApp.
 */
angular.module('onlinesenpaiUiApp').service('UserService', function ($resource) {
    return $resource('/api/users/:id', {}, {
        findAll: {
            method: 'GET',
            isArray: true
        },
        create: {
            method: 'POST'
        },
        update: {
            method: 'PUT',
            param: {
                id: '@id'
            }
        }
    });
});
