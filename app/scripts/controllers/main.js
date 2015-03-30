'use strict';

angular.module('testApp')
  .controller('MainCtrl', function ($scope, addresses) {
    $scope.addresses = addresses;
  });
