'use strict';

angular.module('testApp')
  .controller('MainCtrl', function ($scope, addresses) {
    $scope.addressesList = addresses.list;
    $scope.addAddress = addresses.add;
    $scope.removeAddress = addresses.remove;
    $scope.updateAddress = addresses.update;
  });
