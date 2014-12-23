'use strict';

/**
 * @ngdoc overview
 * @name krausenApp
 * @description
 * # krausenApp
 *
 * Main module of the application.
 */
angular
  .module('krausenApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'krausenApp.calcService'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .when('/brew', {
        templateUrl: 'views/brew.html',
        controller: 'BrewCtrl'
      })
      .when('/hops', {
        templateUrl: 'views/hops.html',
        controller: 'HopCtrl'
      })
      .when('/tools', {
        templateUrl: 'views/tools.html',
        controller: 'ToolsCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
