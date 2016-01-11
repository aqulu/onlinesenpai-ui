'use strict';

describe('Service: SecurityService', function () {

  // load the service's module
  beforeEach(module('onlinesenpaiUiApp'));

  // instantiate service
  var SecurityService;
  beforeEach(inject(function (_SecurityService_) {
    SecurityService = _SecurityService_;
  }));

  it('should do something', function () {
    expect(!!SecurityService).toBe(true);
  });

});
