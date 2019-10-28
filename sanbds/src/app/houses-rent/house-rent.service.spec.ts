import { TestBed } from '@angular/core/testing';

import { HouseRentService } from './house-rent.service';

describe('HouseRentService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: HouseRentService = TestBed.get(HouseRentService);
    expect(service).toBeTruthy();
  });
});
