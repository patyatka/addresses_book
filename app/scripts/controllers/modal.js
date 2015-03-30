'use strict';

angular.module('testApp')
  .controller('modalController', [
    '$scope', '$element', 'title', 'address', 'close', 
    function($scope, $element, title, address, close) {

    $scope.name = address.name || '';
    $scope.phone = address.phone || '';
    $scope.address = address.address || '';
    $scope.title = title;

    $scope.close = function() {
      close({
        name: $scope.name,
        phone: $scope.phone,
        address: $scope.address
      }, 500);
    };

    $scope.cancel = function() {
      $element.modal('hide');
      close('cancel', 500);
    };
  }]);