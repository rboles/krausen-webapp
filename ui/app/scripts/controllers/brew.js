'use strict';

/**
 * @ngdoc function
 * @name uiApp.controller:BrewCtrl
 * @description
 * # BrewCtrl
 * Controller for brew day
 */
angular.module('uiApp')
  .controller('BrewCtrl', function ($scope) {
    $scope.boilVolume = 7;
    $scope.waterAbsorptionRatio = 0.2;
    $scope.kettleCorrection = 0.2;

    $scope.poundsGrain = 14;
    $scope.mashTemperature = 154;
    $scope.hasStirPlate = true;
    $scope.wortOG = 1.064;

    $scope.calculate = function() {
      console.log('calculate...');
    };

    /**
     * Convert specific gravity to degrees Plato
     * @param g Gravity
     */
    $scope.calcPlato = function(g) {
      var plato = (g - 1) * 1000 / 4;
      return plato.toFixed(1);
    };

    /**
     * Adjust gravity for temperature. For every 10 degrees over 60 dF, add
     * 0.003 to gravity and vice versa for every 10 dF under 60
     * @param g Original gravity
     * @param df Temperature
     */
    $scope.calcAdjustedGravity = function(g, df) {
      return ((df - 60) / 10 * 0.003) + g;
    };

    /**
     * Suggest a starter volume (liters) for a wort with the specified
     * original gravity. If a stir plate is employed, the volume is cut in
     * half, down to a minimum of 1 liter
     * @param g Original gravity
     * @param stirPlate True if using a stir plate
     */
    $scope.calcStarterVolume = function(g, stirPlate) {
      var plato = $scope.calcPlato(g);
      var cells = plato * 15;
      var packs = cells / 200;
      var liters = 1.0;
      if ( packs < 1.0 ) {
        liters = 2.0;
      } else {
        liters = packs * 2;
      }
      if ( stirPlate === true ) {
        liters = liters / 2;
      }
      return liters.toFixed(1);
    };

    /**
     * Suggest a starter DME measure (grams)
     * @param g Original gravity of wort
     * @param stirPlate True if using a stir plate
     */
    $scope.calcStarterDme = function(g, stirPlate) {
      var vol = $scope.calcStarterVolume(g, stirPlate);
      return vol * 100;
    };

    /**
     * Calculates the amount of water absorbed by grain in the mash.
     * The water absorption ratio is usually between 0.1 and 0.2 gallons
     * @param lbsGrain Pounds of grain in the mash
     * @param absorptionRatio Water absorption ratio
     */
    $scope.calcWaterAbsorbed = function(lbsGrain, absorptionRatio) {
      return lbsGrain * absorptionRatio;
    };

    /**
     * Calculates a suggested volume of strike water. Assumes 1.2 quarts
     * of water per pound of grain
     * @param lbsGrain Pounds of grain in the mash
     * @return Gallons of strike water
     */
    $scope.calcStrikeWaterVolume = function(lbsGrain) {
      var volume = 1.2 * lbsGrain / 4.0;
      return volume.toFixed(2);
    };

    /**
     * Calculates a suggested volume of pre-lauter water.
     * @param boilVolume Desired volume in the boil kettle
     * @param lbsGrain Pounds of grain in the mash
     * @param absorptionRatio Water absorption ratio
     */
    $scope.calcPreLauterVolume = function(boilVolume, lbsGrain, absorptionRatio) {
      var strikeVolume = $scope.calcStrikeWaterVolume(lbsGrain);
      var absorbed = $scope.calcWaterAbsorbed(lbsGrain, absorptionRatio);
      var prelaut = boilVolume / 2.0 - (strikeVolume - absorbed);
      return prelaut.toFixed(2);
    };

    /**
     * Calculates a suggested volume of sparge water
     * @param boilVolume Desired volume in the boil kettle
     */
    $scope.calcSpargeWaterVolume = function(boilVolume) {
      var spargeVolume = boilVolume / 2.0;
      return spargeVolume.toFixed(2);
    };

  });
