'use strict';

angular.module('mattfrizApp.controllers.main', [])
  .controller('MainCtrl', function ($scope) {
    $scope.viewState = {
      contentVisible: false
    };
  });
