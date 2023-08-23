import { TestBed } from '@angular/core/testing';

import { UserFormTestService } from './user-form-test.service';

describe('UserFormTestService', () => {
  let service: UserFormTestService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UserFormTestService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
