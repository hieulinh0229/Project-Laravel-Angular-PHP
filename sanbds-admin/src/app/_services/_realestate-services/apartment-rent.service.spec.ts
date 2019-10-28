import { TestBed, inject } from '@angular/core/testing';

import { ApartmentRentService } from './apartment-rent.service';

describe('ApartmentRentService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ApartmentRentService]
    });
  });

  it('should be created', inject([ApartmentRentService], (service: ApartmentRentService) => {
    expect(service).toBeTruthy();
  }));
});
