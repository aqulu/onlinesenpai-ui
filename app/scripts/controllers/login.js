'use strict';

/**
 * @ngdoc function
 * @name onlinesenpaiUiApp.controller:LoginCtrl
 * @description
 * # LoginCtrl
 * Controller of the onlinesenpaiUiApp
 */
angular.module('onlinesenpaiUiApp').controller('LoginCtrl', function ($scope, $location, SecurityService) {
  if ($scope.isLoggedIn()) {
    $location.path('/techniques');
  }

  $scope.user = {mail:'', password: ''};

  $scope.login = function() {
    SecurityService.login($scope.user).$promise.then(
        function(result) {
            $scope.setCredentials(result.user, result.token.token);
            $location.path('/techniques');
        }, function(error) {
            console.log('login failed');
        }
    );
  };
});
