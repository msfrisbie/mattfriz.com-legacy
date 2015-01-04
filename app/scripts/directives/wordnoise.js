'use strict';

angular.module('mattfrizApp.directives.wordnoise', [])
.directive('wordnoise', function($interval, $timeout) {
  return {
    restrict: 'E',
    replace: true,
    templateUrl: '/views/partials/wordnoise.html',
    link: function(scope, el, attrs) {
      function getRandomInt(min, max) {
          return Math.floor(Math.random() * (max - min + 1)) + min;
      }

      scope.forceFade = function(idx) {
        var target = scope.viewData.sillyDescriptors[idx];

        target.display = true;
        $timeout(function() {
          target.display = false;
        }, 500);
      }

      $interval(function() {

        var idx = getRandomInt(0, scope.viewData.sillyDescriptors.length - 1)
          

        scope.forceFade(idx);
        //   , target = scope.viewData.sillyDescriptors[idx];

        // target.display = true;
        // $timeout(function() {
        //   target.display = false;
        // }, 500);
      }, 1000);
    }
  };
});