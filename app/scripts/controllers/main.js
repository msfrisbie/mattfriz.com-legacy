'use strict';

/**
 * @ngdoc function
 * @name mattfrizApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the mattfrizApp
 */
angular.module('mattfrizApp.controllers.main', [])
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
