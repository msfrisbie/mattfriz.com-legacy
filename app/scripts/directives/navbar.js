'use strict';

angular.module('mattfrizApp.directives.navbar', [])
.directive('navbar', function($timeout) {
  return {
    restrict: 'E',
    templateUrl: '/views/partials/navbar.html',
    link: function(scope, el, attrs) {
      $timeout(function() {
        scope.navElements = [
          {
            str: 'About Me',
            link: '#/about'
          },
          {
            str: 'Publications',
            link: '#/publications'
          },
          {
            str: 'Expeditions',
            link: '#/expeditions'
          },
          {
            str: 'Running',
            link: '#/running'
          },
          {
            str: 'Résumé',
            link: '#/files/matt_frisbie_resume.pdf'
          }
        ];
      }, 2500);
    }
  };
});
