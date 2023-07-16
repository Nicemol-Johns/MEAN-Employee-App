import { TestBed } from '@angular/core/testing';

import { GetemployeedataService } from './getemployeedata.service';

describe('GetemployeedataService', () => {
  let service: GetemployeedataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetemployeedataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
