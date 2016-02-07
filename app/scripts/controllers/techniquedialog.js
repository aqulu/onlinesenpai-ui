'use strict';

/**
 * @ngdoc function
 * @name onlinesenpaiUiApp.controller:TechniquedialogCtrl
 * @description
 * # TechniquedialogCtrl
 * Controller of the onlinesenpaiUiApp
 */
angular.module('onlinesenpaiUiApp').controller('UserDialogCtrl', function ($scope, $mdDialog, technique, TechniqueService) {
    $scope.technique = technique;

    $scope.save = function() {
        TechniqueService.updateTechnique({id: $scope.technique.id}, $scope.technique).$promise.then(function(success) {
            $scope.showToast('alles ok!');
            $mdDialog.hide();
        }, function(error) {
            $scope.showToast('Fehler ist aufgetreten.');
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
