'use strict';

/**
 * @ngdoc function
 * @name uiApp.controller:ToolsCtrl
 * @description
 * # ToolsCtrl
 * Controller for tools view
 */
angular.module('uiApp')
  .controller('ToolsCtrl', function ($scope) {
});

angular.module('uiApp')
  .controller('AbvCalcCtrl', function ($scope, CalcService) {
    $scope.og = 1.060;
    $scope.fg = 1.010;
    $scope.ogTemp = 65;
    $scope.fgTemp = 65;
    $scope.$algorithm = 'daniels';  // daniels || papazian
    $scope.abv = 6.792;

    $scope.abv = function() {
      var ogAdj = CalcService.calcGravityTemperatureAdjust($scope.og, $scope.ogTemp);
      var fgAdj = CalcService.calcGravityTemperatureAdjust($scope.fg, $scope.fgTemp);

      if ( $scope.algorithm === 'papazian' ) {
        return CalcService.calcAbvPapazian(ogAdj, fgAdj).toFixed(3);
      } else {
        return CalcService.calcAbvDaniels(ogAdj, fgAdj).toFixed(3);
      }
    };
});
