'use strict';

describe('Controller: MainCtrl', function () {

  // load the controller's module
  beforeEach(module('testApp'));

  var MainCtrl;

  // Initialize the controller
  beforeEach(inject(function ($controller) {
    MainCtrl = $controller('MainCtrl');
  }));

  it('should attach a list of addresses to the MainCtrl', function () {
    expect(MainCtrl.addressesList.length).toBe(0);
  });

  it('should add then remove an item from the list', function () {
    var address = {name: 'Test 1'};
    MainCtrl.addAddress(address);
    MainCtrl.removeAddress(0);
    expect(MainCtrl.addressesList.length).toBe(0);
  });

});
