import { TestBed, inject } from '@angular/core/testing';

import { VillaRentService } from './villa-rent.service';

describe('VillaRentService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [VillaRentService]
    });
  });

  it('should be created', inject([VillaRentService], (service: VillaRentService) => {
    expect(service).toBeTruthy();
  }));
});
