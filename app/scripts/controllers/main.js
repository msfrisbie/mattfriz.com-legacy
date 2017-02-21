'use strict';

angular.module('mattfrizApp.controllers.main', [])
  .controller('MainCtrl', function ($scope) {

    document.getElementById('background').style.display = undefined;
    document.getElementById('nameplate').style.display = undefined;

    $scope.viewState = {
      contentVisible: false
    };
  });
