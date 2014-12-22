'use strict';

angular.module('uiApp.calcService', []).
  factory('CalcService', function() {
  return {

    /**
     * Convert specific gravity to degrees Plato
     * @param g Gravity
     * @return Degrees Plato
     */
    calcPlato: function(g) {
      return (g - 1) * 1000 / 4;
    },

    /**
     * Adjust gravity for temperature. For every 10 degrees over 60 dF, add
     * 0.003 to gravity and vice versa for every 10 dF under 60
     * @param g Original gravity
     * @param temp Temperature
     */
    calcGravityTemperatureAdjust: function(g, t) {
      return ((t - 60) / 10 * 0.003) + g;
    },

    /**
     * Calculate ABV using the Daniels equation. This equation is
     * considered by some to be more accurate for beers under 1.775.
     * Don't forget to adjust your gravity for temperature
     * @param og Original gravity
     * @param fg Final gravity
     */
    calcAbvDaniels: function(og, fg) {
      return (76.08 * (og - fg) / (1.775 -  og)) * (fg / 0.794);
    },

    /**
     * Calculate ABV using the Papazian equation.
     * Don't forget to adjust your gravity for temperature
     * @param og Original gravity
     * @param fg Final gravity
     */
    calcAbvPapazian: function(og, fg) {
      return (og - fg) * 131.25;
    },

    /**
     * Suggest a starter volume (liters) for a wort with the specified
     * original gravity. If a stir plate is employed, the volume is cut in
     * half, down to a minimum of 1 liter
     * @param g Original gravity
     * @param stirPlate True if using a stir plate
     */
    calcStarterVolume: function(og, stirPlate) {
      var plato = this.calcPlato(og);
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
      return liters;
    },

    /**
     * Suggest a starter DME measure (grams)
     * @param g Original gravity of wort
     * @param stirPlate True if using a stir plate
     */
    calcStarterDme: function(g, stirPlate) {
      return this.calcStarterVolume(g, stirPlate) * 100;
    },

    /**
     * Calculates the amount of water absorbed by grain in the mash.
     * The water absorption ratio is usually between 0.1 and 0.2 gallons
     * @param lbsGrain Pounds of grain in the mash
     * @param absorptionRatio Water absorption ratio
     */
    calcWaterAbsorbed: function(lbsGrain, absorptionRatio) {
      return lbsGrain * absorptionRatio;
    },

    /**
     * Calculates a suggested volume of strike water. Assumes 1.2 quarts
     * of water per pound of grain
     * @param lbsGrain Pounds of grain in the mash
     * @return Gallons of strike water
     */
    calcStrikeWaterVolume: function(lbsGrain) {
      return 1.2 * lbsGrain / 4.0;
    },

    /**
     * Calculates a suggested volume of pre-lauter water.
     * @param boilVolume Desired volume in the boil kettle
     * @param lbsGrain Pounds of grain in the mash
     * @param absorptionRatio Water absorption ratio
     */
    calcPreLauterVolume: function(boilVolume, lbsGrain, absorptionRatio) {
      var strikeVolume = this.calcStrikeWaterVolume(lbsGrain);
      var absorbed = this.calcWaterAbsorbed(lbsGrain, absorptionRatio);
      return boilVolume / 2.0 - (strikeVolume - absorbed);
    },

    /**
     * Calculates a suggested volume of sparge water
     * @param boilVolume Desired volume in the boil kettle
     */
    calcSpargeWaterVolume: function(boilVolume) {
      return boilVolume / 2.0;
    }
  };
});
