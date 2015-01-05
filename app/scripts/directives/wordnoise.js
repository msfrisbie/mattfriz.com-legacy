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

      function getIdx() {
        return getRandomInt(0, scope.viewData.sillyDescriptors.length - 1);
      }

      var prevIndices = []
        , idx;

      scope.forceFade = function(idx) {

        if (!idx) {
          idx = getIdx();
          while(prevIndices.indexOf(idx) != -1) {
            idx = getIdx();
          }
          prevIndices.push(idx);
          while(prevIndices.length > 10) {
            prevIndices.shift();
          }
        } else {
          if (prevIndices.indexOf(idx)===-1) {
            prevIndices.push(idx);
          }
        }

        var target = scope.viewData.sillyDescriptors[idx];

        target.display = true;
        $timeout(function() {
          target.display = false;
        }, 500);
      }

      $interval(function() {
        scope.forceFade();
      }, 1000);
    }
  };
});