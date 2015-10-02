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
    'mattfrizApp.controllers.outburst',
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
      .when('/outbursts/:entry?', {
        templateUrl: 'views/outbursts.html',
        controller: 'OutburstCtrl'
      })
      // .when('/running', {
      //   templateUrl: 'views/running.html',
      //   controller: 'ContentCtrl'
      // })
      // .when('/resume', {
      //   redirectTo: '/files/matt-frisbie-resume.pdf'
      // })
      .otherwise({
        redirectTo: '/'
      });
  });
