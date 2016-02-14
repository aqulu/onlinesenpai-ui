'use strict';

/**
 * @ngdoc function
 * @name onlinesenpaiUiApp.controller:ProfileCtrl
 * @description
 * # ProfileCtrl
 * Controller of the onlinesenpaiUiApp
 */
angular.module('onlinesenpaiUiApp').controller('ProfileCtrl', function ($scope, $rootScope, UserService) {
  $scope.user = $scope.currentUser;
  $scope.save = function () {
    UserService.update({id: $scope.user.id}, $scope.user).$promise.then(function(result){
      $rootScope.showToast('alles ok!');
    }, function(error){
      $rootScope.showToast('Fehler ist aufgetreten.');
    });
  };
});
