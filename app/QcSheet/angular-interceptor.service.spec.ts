import { TestBed } from '@angular/core/testing';

import { AngularInterceptorService } from './angular-interceptor.service';

describe('AngularInterceptorService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AngularInterceptorService = TestBed.get(AngularInterceptorService);
    expect(service).toBeTruthy();
  });
});
