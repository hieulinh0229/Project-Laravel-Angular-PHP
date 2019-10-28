import { TestBed, inject } from '@angular/core/testing';

import { VillaSaleService } from './villa-sale.service';

describe('VillaSaleService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [VillaSaleService]
    });
  });

  it('should be created', inject([VillaSaleService], (service: VillaSaleService) => {
    expect(service).toBeTruthy();
  }));
});
