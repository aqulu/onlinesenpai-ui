'use strict';

/**
 * @ngdoc function
 * @name onlinesenpaiUiApp.controller:DialogCtrl
 * @description
 * # DialogCtrl
 * Controller of the onlinesenpaiUiApp
 */
angular.module('onlinesenpaiUiApp').controller('VideoDialogCtrl', function ($scope, $mdDialog, technique) {
    $scope.technique = technique;
    $scope.cancel = function() {
        $mdDialog.cancel();
    };
});
