'use strict';

angular.module('mattfrizApp.directives.nameplate', [])
.directive('nameplate', function($timeout) {
  return {
    restrict: 'E',
    templateUrl: '/views/partials/nameplate.html',
    link: function(scope, el, attrs) {
      scope.name = 'Matt Frisbie';
      scope.showname = false;
      $timeout(function() {
        scope.showname = true;
      }, 500);
    }
  };
})