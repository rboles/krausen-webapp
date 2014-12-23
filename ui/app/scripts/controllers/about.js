'use strict';

/**
 * @ngdoc function
 * @name krausenApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the krausenApp
 */
angular.module('krausenApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
