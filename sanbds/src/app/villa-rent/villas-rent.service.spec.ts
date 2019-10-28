import { TestBed } from '@angular/core/testing';

import { VillasRentService } from './villas-rent.service';

describe('VillasRentService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: VillasRentService = TestBed.get(VillasRentService);
    expect(service).toBeTruthy();
  });
});
