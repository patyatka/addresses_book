'use strict';

angular.module('testApp')
  .controller('MainCtrl', function ($scope, localStorageService, ModalService) {
    var addressesInStore = localStorageService.get('addresses');

    $scope.addresses = addressesInStore || [];

    $scope.$watch('addresses', function () {
      localStorageService.set('addresses', $scope.addresses);
    }, true);

    $scope.showADialog = function (type, index) {
      var inputs;
      if (type === 'add') {
        inputs = {
          title: 'Add Address',
          address: {}
        };
      } else if (type === 'update') {
        inputs = {
          title: 'Update Address',
          address: $scope.addresses[index]
        };
      }
      ModalService.showModal({
        templateUrl: 'views/modals/modal.html',
        controller: 'modalController',
        inputs: inputs
      }).then(function(modal) {
        modal.element.modal();
        modal.close.then(function(result) {
          if (result !== 'cancel') {
            $scope.addAddress(result);
          }
        });
      });
    };

    $scope.addAddress = function (result) {
      $scope.addresses.push(result);
	  };
    
    $scope.removeAddress = function (index) {
      $scope.addresses.splice(index, 1);
    };
  })
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
