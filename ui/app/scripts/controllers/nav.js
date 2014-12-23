'use strict';

/**
 * @ngdoc function
 * @name krausenApp.controller:NavCtrl
 * @description
 * # NavCtrl
 * Controller for navigation widgets
 */
angular.module('krausenApp')
  .controller('NavCtrl', function ($scope, $location) {
    $scope.isActive = function(viewLocation) {
      return viewLocation === $location.path();
    };
  });
