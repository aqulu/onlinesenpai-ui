'use strict';

/**
 * @ngdoc function
 * @name onlinesenpaiUiApp.controller:LoginCtrl
 * @description
 * # LoginCtrl
 * Controller of the onlinesenpaiUiApp
 */
angular.module('onlinesenpaiUiApp').controller('LoginCtrl', function ($scope, $rootScope, $location, SecurityService) {
  if ($rootScope.isLoggedIn()) {
    $location.path('/techniques');
  }
    
  $scope.user = {mail:'', password: ''};
  
  $scope.login = function() {
    SecurityService.login($scope.user).$promise.then(
        function(result) {
            localStorage.setItem('token', result.token.token);
            localStorage.setItem('user', JSON.stringify(result.user));
            $rootScope.currentUser = result.user;
            $location.path('/techniques');
        }, function(error) {
            console.log('login failed');
        }
    );
  };
});
