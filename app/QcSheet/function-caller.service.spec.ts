import { TestBed } from '@angular/core/testing';

import { FunctionCallerService } from './function-caller.service';

describe('FunctionCallerService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FunctionCallerService = TestBed.get(FunctionCallerService);
    expect(service).toBeTruthy();
  });
});
