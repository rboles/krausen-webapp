'use strict';

/**
 * @ngdoc function
 * @name krausenApp.controller:ToolsCtrl
 * @description
 * # ToolsCtrl
 * Controller for tools view
 */
angular.module('krausenApp')
  .controller('ToolsCtrl', function ($scope) {
});

angular.module('krausenApp')
  .controller('AbvCalcCtrl', function ($scope, CalcService) {
    $scope.og = 1.060;
    $scope.fg = 1.010;
    $scope.ogTemp = 65;
    $scope.fgTemp = 65;
    $scope.$algorithm = 'daniels';  // daniels || papazian

    $scope.abv = function() {
      var og = parseFloat($scope.og);
      var fg = parseFloat($scope.fg);
      var ogTemp = parseInt($scope.ogTemp);
      var fgTemp = parseInt($scope.fgTemp);

      var ogAdj = CalcService.calcGravityTemperatureAdjust(og, ogTemp);
      var fgAdj = CalcService.calcGravityTemperatureAdjust(fg, fgTemp);

      if ( $scope.algorithm === 'papazian' ) {
        return CalcService.calcAbvPapazian(ogAdj, fgAdj).toFixed(3);
      } else {
        return CalcService.calcAbvDaniels(ogAdj, fgAdj).toFixed(3);
      }
    };
});
