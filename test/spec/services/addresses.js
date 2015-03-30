'use strict';

describe('Service: addresses', function () {

  // load the service's module
  beforeEach(module('testApp'));

  // instantiate service
  var addresses, localStorageService;
  beforeEach(inject(function (_addresses_, _localStorageService_) {
    addresses = _addresses_;
    localStorageService = _localStorageService_;
  }));

  afterEach(function () {
    localStorageService.clearAll();
  });

  it('should add item to list and storage', function () {
    var item = {};
    addresses.add(item);
    expect(addresses.list).toEqual([{}]);
    expect(localStorageService.get('addresses')).toEqual([{}]);
  });

  it('should remove item from the list and storage', function () {
    var item = {};
    addresses.add(item);
    addresses.remove(0);
    expect(addresses.list).toEqual([]);
    expect(localStorageService.get('addresses')).toEqual([]);
  });

  it('should update item in the list and storage', function () {
    var item = {};
    addresses.add(item);   
    addresses.update({a: 1}, 0);
    expect(addresses.list).toEqual([{a: 1}]);
    expect(localStorageService.get('addresses')).toEqual([{a: 1}]);
  });

});
