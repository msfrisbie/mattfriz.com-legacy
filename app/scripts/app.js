'use strict';

angular
  .module('mattfrizApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'mattfrizApp.controllers.main',
    'mattfrizApp.controllers.content',
    'mattfrizApp.directives.content',
    'mattfrizApp.directives.navbar',
    'mattfrizApp.directives.nameplate',
    'mattfrizApp.directives.background',
    'mattfrizApp.directives.wordnoise'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        template: '',
        controller: 'MainCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'ContentCtrl'
      })
      .when('/publications', {
        templateUrl: 'views/publications.html',
        controller: 'ContentCtrl'
      })
      .when('/expeditions', {
        templateUrl: 'views/expeditions.html',
        controller: 'ContentCtrl'
      })
      .when('/running', {
        templateUrl: 'views/running.html',
        controller: 'ContentCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
