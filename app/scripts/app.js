'use strict';

/**
 * @ngdoc overview
 * @name mattfrizApp
 * @description
 * # mattfrizApp
 *
 * Main module of the application.
 */
angular
  .module('mattfrizApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'mattfrizApp.controllers.main',
    'mattfrizApp.directives.content'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        template: ''
      })
      .when('/about', {
        templateUrl: 'views/about.html'
      })
      .when('/publications', {
        templateUrl: 'views/publications.html'
      })
      .when('/expeditions', {
        templateUrl: 'views/expeditions.html'
      })
      .when('/running', {
        templateUrl: 'views/running.html'
      })
      .otherwise({
        template: 'JAKESAUCE',
        redirectTo: '/'
      });
  });
