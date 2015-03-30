'use strict';

describe('Directive: addressDialog', function () {

  // load the directive's module
  beforeEach(module('testApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should show dialog', inject(function ($compile, ModalService) {
    spyOn(ModalService, 'showModal').and.callThrough();
    element = angular.element('<div address-dialog></div>');
    element = $compile(element)(scope);
    element.click();
    expect(ModalService.showModal).toHaveBeenCalled();
  }));
});
