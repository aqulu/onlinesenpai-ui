'use strict';

/**
 * @ngdoc function
 * @name onlinesenpaiUiApp.controller:LoginCtrl
 * @description
 * # LoginCtrl
 * Controller of the onlinesenpaiUiApp
 */
angular.module('onlinesenpaiUiApp').controller('ProgramCtrl', function ($scope, $mdDialog, GradeService, TechniqueService) {
    $scope.grades = GradeService.findAll();
    var originatorEv;
    this.openMenu = function($mdOpenMenu, ev) {
      originatorEv = ev;
      $mdOpenMenu(ev);
    };
    
    $scope.showProgram = function(grade) {
        $scope.selectedGrade = grade;
        $scope.techniques = GradeService.findTechniques({id: grade.id});
    };
    
    $scope.openDialog = function(ev, technique) {
        $mdDialog.show({
            controller: 'DialogCtrl',
            templateUrl: 'views/videodialog.tmpl.html',
            parent: angular.element(document.body),
            targetEvent: ev,
            clickOutsideToClose:true,
            locals: {
                technique: technique
            }
        });
    };
    
});