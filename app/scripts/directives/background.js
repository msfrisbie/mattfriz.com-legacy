'use strict';

angular.module('mattfrizApp.directives.background', [])
.directive('background', function($timeout, $location) {
  return {
    restrict: 'E',
    template: '<div class="pic-background" ng-if="showbg"></div>',
    link: function(scope, el, attrs) {
      if ($location.path() !== '' && $location.path() !== '') {
        el[0].style.display = 'none';
      }

      var setData = function() {
        scope.showbg = true;
      }

      if ($location.path() != '/' && $location.path() != '') {
        setData();
      } else {
        scope.showbg = false;
        $timeout(setData, 600); // 1000
      }
    }
  }
})