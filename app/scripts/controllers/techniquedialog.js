'use strict';

/**
 * @ngdoc function
 * @name onlinesenpaiUiApp.controller:TechniquedialogCtrl
 * @description
 * # TechniquedialogCtrl
 * Controller of the onlinesenpaiUiApp
 */
angular.module('onlinesenpaiUiApp').controller('TechniqueDialogCtrl', function ($scope, $rootScope, $mdDialog, technique, CategoryService) {
    $scope.technique = technique;

    $scope.save = function() {
        CategoryService.updateTechnique({id: $scope.technique.id}, $scope.technique).$promise.then(function(success) {
            $rootScope.showToast('alles ok!');
            $mdDialog.hide();
        }, function(error) {
            $rootScope.showToast('Fehler ist aufgetreten.');
        });
    };

    var originatorEv;
    this.openMenu = function($mdOpenMenu, ev) {
      originatorEv = ev;
      $mdOpenMenu(ev);
    };

    $scope.cancel = function() {
        $mdDialog.cancel();
    };
});
