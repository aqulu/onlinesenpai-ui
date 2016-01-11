'use strict';

/**
 * @ngdoc service
 * @name onlinesenpaiUiApp.GradeService
 * @description
 * # GradeService
 * Service in the onlinesenpaiUiApp.
 */
angular.module('onlinesenpaiUiApp').service('GradeService', function ($resource) {
    return $resource('/api/grades/:id/:page', {}, {
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
