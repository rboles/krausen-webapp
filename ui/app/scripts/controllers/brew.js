'use strict';

/**
 * @ngdoc function
 * @name krausenApp.controller:BrewCtrl
 * @description
 * # BrewCtrl
 * Controller for brew day
 */
angular.module('krausenApp')
  .controller('BrewCtrl', function ($scope, CalcService) {
    $scope.boilVolume = 7.0;
    $scope.waterAbsorptionRatio = 0.2;
    $scope.kettleCorrection = 0.2;

    $scope.poundsGrain = 14.0;
    $scope.mashTemperature = 154;
    $scope.hasStirPlate = true;
    $scope.og = 1.064;

    $scope.getOg = function() {
      var og = parseFloat($scope.og);
      return og.toFixed(3);
    };

    $scope.getDegreesPlato = function() {
      return CalcService.calcPlato($scope.og).toFixed(2);
    };

    $scope.getBoilVolume = function() {
      var boilVolume = parseFloat($scope.boilVolume);
      return boilVolume.toFixed(2);
    };

    $scope.getPoundsGrain = function() {
      var poundsGrain = parseFloat($scope.poundsGrain);
      return poundsGrain.toFixed(2);
    };

    $scope.getStarterVolume = function() {
      var og = parseFloat($scope.og);
      return CalcService.calcStarterVolume(og, $scope.hasStirPlate).toFixed(2);
    };

    $scope.getStarterDme = function() {
      var og = parseFloat($scope.og);
      return CalcService.calcStarterDme(og, $scope.hasStirPlate).toFixed(2);
    };

    $scope.getStrikeWaterVolume = function() {
      var poundsGrain = parseInt($scope.poundsGrain);
      return CalcService.calcStrikeWaterVolume(poundsGrain).toFixed(2);
    };

    $scope.getStrikeWaterTemperature = function() {
      var mashTemperature = parseInt($scope.mashTemperature);
      return CalcService.calcStrikeWaterTemperature(mashTemperature);
    };

    $scope.getPreLauterVolume = function() {
      var boilVolume = parseFloat($scope.boilVolume);
      var poundsGrain = parseFloat($scope.poundsGrain);
      var waterAbsorptionRatio = parseFloat($scope.waterAbsorptionRatio);
      return CalcService.calcPreLauterVolume(boilVolume, poundsGrain, waterAbsorptionRatio).toFixed(2);
    };

    $scope.getSpargeWaterVolume = function() {
      var boilVolume = parseInt($scope.boilVolume);
      return CalcService.calcSpargeWaterVolume(boilVolume).toFixed(2);
    };

  });
