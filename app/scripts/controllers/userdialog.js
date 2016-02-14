'use strict';

/**
 * @ngdoc function
 * @name onlinesenpaiUiApp.controller:UserdialogCtrl
 * @description
 * # UserdialogCtrl
 * Controller of the onlinesenpaiUiApp
 */
angular.module('onlinesenpaiUiApp').controller('UserDialogCtrl', function ($scope, $rootScope, $mdDialog, user, UserService, GradeService) {
    $scope.user = user;
    $scope.grades = GradeService.findAll();
    // $scope.grades = [{"grade":9,"level":"Kyu","color_hex":"#ffffff"},{"grade":8,"level":"Kyu","color_hex":"#ffed20"},{"grade":7,"level":"Kyu","color_hex":"#f78402"},{"grade":6,"level":"Kyu","color_hex":"#18851f"},{"grade":5,"level":"Kyu","color_hex":"#01579b"},{"grade":4,"level":"Kyu","color_hex":"#8d15ba"},{"grade":3,"level":"Kyu","color_hex":"#51474A"},{"grade":2,"level":"Kyu","color_hex":"#51474A"},{"grade":1,"level":"Kyu","color_hex":"#51474A"},{"grade":1,"level":"Dan","color_hex":"#000000"},{"grade":2,"level":"Dan","color_hex":"#000000"},{"grade":3,"level":"Dan","color_hex":"#000000"},{"grade":4,"level":"Dan","color_hex":"#000000"},{"grade":5,"level":"Dan","color_hex":"#000000"},{"grade":6,"level":"Dan","color_hex":"#000000"},{"grade":7,"level":"Dan","color_hex":"#000000"},{"grade":8,"level":"Dan","color_hex":"#000000"},{"grade":9,"level":"Dan","color_hex":"#000000"},{"grade":10,"level":"Dan","color_hex":"#000000"}];

    $scope.save = function() {
        var action;

        if ($scope.user.id) {
            action = UserService.update({id: $scope.user.id}, $scope.user);
        } else {
            action = UserService.create($scope.user);
        }

        action.$promise.then(function(success) {
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
