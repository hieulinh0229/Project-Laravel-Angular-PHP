import { TestBed } from '@angular/core/testing';

import { ApartmentRentService } from './apartment-rent.service';

describe('ApartmentRentService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ApartmentRentService = TestBed.get(ApartmentRentService);
    expect(service).toBeTruthy();
  });
});
