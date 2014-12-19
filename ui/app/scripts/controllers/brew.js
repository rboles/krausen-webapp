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
    $scope.poundsGrain = 0;
    $scope.mashTemperature = 154;
    $scope.hasStirPlate = true;
    $scope.wortOG = 1.050;

    $scope.calculate = function() {
      console.log('calculate...');
      if ( $scope.hasStirPlate === false ) {
        console.log('no stir plate for this batch');
      }
    };


  });
