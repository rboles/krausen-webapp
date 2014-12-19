'use strict';

/**
 * @ngdoc function
 * @name uiApp.controller:NavCtrl
 * @description
 * # NavCtrl
 * Controller for navigation widgets
 */
angular.module('uiApp')
  .controller('NavCtrl', function ($scope, $location) {
    $scope.isActive = function(viewLocation) {
      return viewLocation === $location.path();
    };
  });
