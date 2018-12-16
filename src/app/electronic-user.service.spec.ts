import { TestBed } from '@angular/core/testing';

import { ElectronicUserService } from './electronic-user.service';

describe('ElectronicUserService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ElectronicUserService = TestBed.get(ElectronicUserService);
    expect(service).toBeTruthy();
  });
});
