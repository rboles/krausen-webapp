'use strict';

/**
 * @ngdoc function
 * @name krausenApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the krausenApp
 */
angular.module('krausenApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
