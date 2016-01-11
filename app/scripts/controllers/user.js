'use strict';

/**
 * @ngdoc function
 * @name onlinesenpaiUiApp.controller:UserCtrl
 * @description
 * # UserCtrl
 * Controller of the onlinesenpaiUiApp
 */
angular.module('onlinesenpaiUiApp').controller('UserCtrl', function (UserService, $scope, $mdDialog) {
    
    $scope.openDialog = function(ev, user) {
        if (!user) {
            user = {};
        }
        
        $mdDialog.show({
            controller: 'UserDialogCtrl',
            templateUrl: 'views/userdialog.tmpl.html',
            parent: angular.element(document.body),
            targetEvent: ev,
            clickOutsideToClose:true,
            locals: {
                user: user
            }
        }).then(
            function() {$scope.reload();},
            function() {$scope.reload();}
        );
    };
    
    $scope.reload = function() {
        $scope.users = UserService.findAll();
        // $scope.users = [{"firstname":"Luca","lastname":"Aquino","mail":"laquino@hsr.ch","instructor":true,"grade":{"grade":3,"level":"Dan","color_hex":"#000000"}},{"firstname":"Atsushi","lastname":"Murasaki","mail":"mb@karate.jp","instructor":false,"grade":{"grade":4,"level":"Kyu","color_hex":"#8d15ba"}}, {"firstname":"test","lastname":"test","mail":"test@test.ch","instructor":false,"grade":{"grade":2,"level":"Kyu","color_hex":"#51474A"}}, {"firstname":"Shintaro","lastname":"Midorima","mail":"sm@karate.jp","instructor":false,"grade":{"grade":6,"level":"Kyu","color_hex":"#18851f"}}];
    };
    
    $scope.reload();
    
});
