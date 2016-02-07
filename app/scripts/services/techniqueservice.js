'use strict';

/**
 * @ngdoc service
 * @name onlinesenpaiUiApp.TechniqueService
 * @description
 * # TechniqueService
 * Service in the onlinesenpaiUiApp.
 */
angular.module('onlinesenpaiUiApp').service('TechniqueService', function ($resource) {
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
        },
        updateTechnique: {
          method: 'PUT',
          params: {
            id: '@id',
            page: 'techniques'
          }
        }
    });
});
