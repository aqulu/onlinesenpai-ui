'use strict';

/**
 * @ngdoc function
 * @name onlinesenpaiUiApp.controller:SignupCtrl
 * @description
 * # SignupCtrl
 * Controller of the onlinesenpaiUiApp
 */
angular.module('onlinesenpaiUiApp').controller('SignUpCtrl', function ($scope, $routeParams, $location, SecurityService) {
    if (!$routeParams.token) {
        $location.path('/login');
    } else {
        localStorage.setItem('token', $routeParams.token);
    }
    
    $scope.user = {password: ''}
    
    $scope.signup = function() {
      SecurityService.signup($scope.user).$promise.then(function() {
        $location.path('/techniques');
      });  
    };    
});