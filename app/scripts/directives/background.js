'use strict';

angular.module('mattfrizApp.directives.background', [])
.directive('background', function($timeout) {
  return {
    restrict: 'E',
    template: '<div class="pic-background" ng-if="showbg"></div>',
    link: function(scope, el, attrs) {
      scope.showbg = false;
      $timeout(function() {
        // console.log('jake')
        scope.showbg = true;
      }, 1000);
    }
  }
})