'use strict';

angular.module('testApp')
  .factory('addresses', function (localStorageService) {

    var addressesInStore = localStorageService.get('addresses');

    var addresses =  addressesInStore || [];

    function saveToStorage () {
      localStorageService.set('addresses', addresses);
    }

    return {
      list: addresses,
      add: function (address) {
        addresses.push(address);
        saveToStorage();
      },
      remove: function (index) {
        addresses.splice(index, 1);
        saveToStorage();
      },
      update: function (address, index) {
        addresses[index] = address;
        saveToStorage();
      }
    };
  });
