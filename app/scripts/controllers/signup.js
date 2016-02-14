'use strict';

/**
 * @ngdoc function
 * @name onlinesenpaiUiApp.controller:SignupCtrl
 * @description
 * # SignupCtrl
 * Controller of the onlinesenpaiUiApp
 */
angular.module('onlinesenpaiUiApp').controller('SignUpCtrl', function ($scope, $rootScope, $routeParams, $location, SecurityService) {
    if (!$routeParams.token) {
        $location.path('/login');
    }

    $scope.user = {password: ''}

    $scope.signup = function() {
      localStorage.setItem('token', $routeParams.token);
      SecurityService.signup($scope.user).$promise.then(function(result) {
        $rootScope.setCredentials(result.user, result.token.token);
        $location.path('/techniques');
      });
    };
});
