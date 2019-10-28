import { TestBed } from '@angular/core/testing';

import { UpdateBdsService } from './update-bds.service';

describe('UpdateBdsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: UpdateBdsService = TestBed.get(UpdateBdsService);
    expect(service).toBeTruthy();
  });
});
