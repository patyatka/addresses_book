'use strict';

angular.module('testApp')
  .controller('MainCtrl', function (addresses) {
    this.addressesList = addresses.list;
    this.addAddress = addresses.add;
    this.removeAddress = addresses.remove;
    this.updateAddress = addresses.update;
  });
