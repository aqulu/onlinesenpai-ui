'use strict';

describe('Service: TechniqueService', function () {

  // load the service's module
  beforeEach(module('onlinesenpaiUiApp'));

  // instantiate service
  var TechniqueService;
  beforeEach(inject(function (_TechniqueService_) {
    TechniqueService = _TechniqueService_;
  }));

  it('should do something', function () {
    expect(!!TechniqueService).toBe(true);
  });

});
