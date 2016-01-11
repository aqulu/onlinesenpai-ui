'use strict';

describe('Service: GradeService', function () {

  // load the service's module
  beforeEach(module('onlinesenpaiUiApp'));

  // instantiate service
  var GradeService;
  beforeEach(inject(function (_GradeService_) {
    GradeService = _GradeService_;
  }));

  it('should do something', function () {
    expect(!!GradeService).toBe(true);
  });

});
