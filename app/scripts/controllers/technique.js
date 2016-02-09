'use strict';

/**
 * @ngdoc function
 * @name onlinesenpaiUiApp.controller:LoginCtrl
 * @description
 * # LoginCtrl
 * Controller of the onlinesenpaiUiApp
 */
angular.module('onlinesenpaiUiApp').controller('TechniqueCtrl', function ($scope, $mdDialog, CategoryService) {
    $scope.categories = CategoryService.findAll();

    // $scope.categories = [{"name":"Kihon","techniques":[{"name":"Junzuki","videoUrl":null},{"name":"Gyakuzuki","videoUrl":null},{"name":"Junzuki no Tsukomi","videoUrl":null},{"name":"Gykuzuki no Tsukomi","videoUrl":null},{"name":"Kette Junzuki","videoUrl":null},{"name":"Kette Gyakuzuki","videoUrl":null},{"name":"Kette Junzuki no Tsukomi","videoUrl":null},{"name":"Kette Gykuzuki no Tsukomi","videoUrl":null},{"name":"Jodanuke","videoUrl":null},{"name":"Gedanbarai","videoUrl":null},{"name":"Sotouke","videoUrl":null},{"name":"Uchiuke","videoUrl":null},{"name":"Shutouke","videoUrl":null},{"name":"Maegeri","videoUrl":null},{"name":"Mawashigeri","videoUrl":null},{"name":"Sokutogeri","videoUrl":null},{"name":"Ushirogeri","videoUrl":null}]},{"name":"Kata","techniques":[{"name":"Pinan Shodan","videoUrl":null},{"name":"Pinan Nidan","videoUrl":null},{"name":"Pinan Sandan","videoUrl":null},{"name":"Pinan Yondan","videoUrl":null},{"name":"Pinan Godan","videoUrl":null},{"name":"Kushanku","videoUrl":null},{"name":"Naihanchi","videoUrl":null},{"name":"Seishan","videoUrl":null},{"name":"Chinto","videoUrl":null},{"name":"Niseishi","videoUrl":null},{"name":"Jion","videoUrl":null},{"name":"Jitte","videoUrl":null},{"name":"Wanshu","videoUrl":null},{"name":"Bassai","videoUrl":null},{"name":"Rohai","videoUrl":null}]},{"name":"Kumite","techniques":[{"name":"Ohyo Kumite Ipponme","videoUrl":null},{"name":"Ohyo Kumite Nihonme","videoUrl":null},{"name":"Ohyo Kumite Sanbonme","videoUrl":null},{"name":"Ohyo Kumite Yohonme","videoUrl":null},{"name":"Ohyo Kumite Gohonme","videoUrl":null},{"name":"Ohyo Kumite Ropponme","videoUrl":null},{"name":"Ohyo Kumite Nanahonme","videoUrl":null},{"name":"Ohyo Kumite Hachihonme","videoUrl":null},{"name":"Kihon Kumite Ipponme","videoUrl":null},{"name":"Kihon Kumite Nihonme","videoUrl":null},{"name":"Kihon Kumite Sanbonme","videoUrl":null},{"name":"Kihon Kumite Yohonme","videoUrl":null},{"name":"Kihon Kumite Gohonme","videoUrl":null},{"name":"Kihon Kumite Ropponme","videoUrl":null},{"name":"Kihon Kumite Nanahonme","videoUrl":null},{"name":"Kihon Kumite Hachihonme","videoUrl":null},{"name":"Kihon Kumite Kyuhonme","videoUrl":null},{"name":"Kihon Kumite Jupponme","videoUrl":null}]}] ;

    $scope.openDialog = function(ev, technique) {
        $mdDialog.show({
            controller: 'VideoDialogCtrl',
            templateUrl: 'views/videodialog.tmpl.html',
            parent: angular.element(document.body),
            targetEvent: ev,
            clickOutsideToClose:true,
            locals: {
                technique: technique
            }
        });
    };

    $scope.editTechnique = function(ev, technique){
      $mdDialog.show({
          controller: 'TechniqueDialogCtrl',
          templateUrl: 'views/techniquedialog.tmpl.html',
          parent: angular.element(document.body),
          targetEvent: ev,
          clickOutsideToClose:true,
          locals: {
              technique: technique
          }
      });
    };

});
