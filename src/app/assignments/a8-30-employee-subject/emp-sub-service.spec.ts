import { TestBed } from '@angular/core/testing';

import { EmpSubService } from './emp-sub-service';

describe('EmpSubService', () => {
  let service: EmpSubService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EmpSubService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
