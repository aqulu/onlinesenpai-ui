'use strict';

/**
 * @ngdoc overview
 * @name onlinesenpaiUiApp
 * @description
 * # onlinesenpaiUiApp
 *
 * Main module of the application.
 */
angular
  .module('onlinesenpaiUiApp', [
    'ngResource',
    'ngRoute', 
    'ngMaterial'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/login', {
        templateUrl: 'views/login.html',
        controller: 'LoginCtrl'
      })
      .when('/users', {
        templateUrl: 'views/users.html',
        controller: 'UserCtrl'
      })
      .when('/techniques', {
        templateUrl: 'views/techniques.html',
        controller: 'TechniqueCtrl'
      })
      .when('/programs', {
        templateUrl: 'views/programs.html',
        controller: 'ProgramCtrl'
      })
      .when('/signup/:token', {
        templateUrl: 'views/signup.html',
        controller: 'SignUpCtrl'
      })
      .otherwise({
        redirectTo: '/login'
      });
  })
  .config(function($httpProvider) {
      var interceptor = function() {
        return {
            'request': function(config) {
                if (angular.isDefined(localStorage.getItem('token'))) {
                    config.headers['X-AUTH-TOKEN'] = localStorage.getItem('token');
                }
                return config;
            }
        };
      };
      $httpProvider.interceptors.push(interceptor);
      
      if (!$httpProvider.defaults.headers.get) {
          $httpProvider.defaults.headers.get = {};
      }
      $httpProvider.defaults.headers.get['If-Modified-Since'] = '0';
  })
  .run(function($rootScope, $location, $mdToast) {
      $rootScope.currentUser = JSON.parse(localStorage.getItem('user'));
      
      $rootScope.logout = function() {
        localStorage.removeItem('token');
        localStorage.removeItem('user');  
        $location.path('/');
      };
      
      $rootScope.isLoggedIn = function() {
        var token = localStorage.getItem('token');
        return token !== null && angular.isDefined(token);
      };
      
      $rootScope.showToast = function(message) {
        $mdToast.show(
            $mdToast.simple()
                .textContent(message)
                .action('OK')
                .highlightAction(false)
                .position('top right')
        );
      };
  });