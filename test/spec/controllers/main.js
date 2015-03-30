'use strict';

describe('Controller: MainCtrl', function () {

  // load the controller's module
  beforeEach(module('testApp'));

  var MainCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    MainCtrl = $controller('MainCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of addresses to the scope', function () {
    expect(scope.addresses.list.length).toBe(0);
  });

  it('should add then remove an item from the list', function () {
    var address = {name: 'Test 1'};
    scope.addresses.add(address);
    scope.addresses.remove(0);
    expect(scope.addresses.list.length).toBe(0);
  });

});
