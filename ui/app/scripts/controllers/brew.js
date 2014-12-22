'use strict';

/**
 * @ngdoc function
 * @name uiApp.controller:BrewCtrl
 * @description
 * # BrewCtrl
 * Controller for brew day
 */
angular.module('uiApp')
  .controller('BrewCtrl', function ($scope, CalcService) {
    $scope.boilVolume = 7;
    $scope.waterAbsorptionRatio = 0.2;
    $scope.kettleCorrection = 0.2;

    $scope.poundsGrain = 14;
    $scope.mashTemperature = 154;
    $scope.hasStirPlate = true;
    $scope.og = 1.064;

    $scope.degreesPlato = function() {
      return CalcService.calcPlato($scope.og).toFixed(1);
    };

    $scope.starterVolume = function() {
      return CalcService.calcStarterVolume($scope.og, $scope.hasStirPlate).toFixed(1);
    };

    $scope.starterDme = function() {
      return CalcService.calcStarterDme($scope.og, $scope.hasStirPlate).toFixed(1);
    };

    $scope.strikeWaterVolume = function() {
      return CalcService.calcStrikeWaterVolume($scope.poundsGrain).toFixed(2);
    };

    $scope.preLauterVolume = function() {
      return CalcService.calcPreLauterVolume($scope.boilVolume, $scope.poundsGrain, $scope.waterAbsorptionRatio).toFixed(2);
    };

    $scope.spargeWaterVolume = function() {
      return CalcService.calcSpargeWaterVolume($scope.boilVolume).toFixed(2);
    };

  });
