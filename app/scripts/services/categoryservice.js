'use strict';

/**
 * @ngdoc service
 * @name onlinesenpaiUiApp.CategoryService
 * @description
 * # CategoryService
 * Service in the onlinesenpaiUiApp.
 */
angular.module('onlinesenpaiUiApp').service('CategoryService', function ($resource) {
    return $resource('/api/categories/:id/:page', {}, {
        findAll: {
            method: 'GET',
            isArray: true
        },
        findTechniques: {
            method: 'GET',
            params: {
                id: '@id',
                page: 'techniques'
            },
            isArray: true
        }
    });
});
