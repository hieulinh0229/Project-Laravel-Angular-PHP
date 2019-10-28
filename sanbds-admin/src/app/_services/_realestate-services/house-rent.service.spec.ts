import { TestBed, inject } from '@angular/core/testing';

import { HouseRentService } from './house-rent.service';

describe('HouseRentService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HouseRentService]
    });
  });

  it('should be created', inject([HouseRentService], (service: HouseRentService) => {
    expect(service).toBeTruthy();
  }));
});
