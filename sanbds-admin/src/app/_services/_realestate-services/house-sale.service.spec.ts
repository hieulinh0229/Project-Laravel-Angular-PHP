import { TestBed, inject } from '@angular/core/testing';

import { HouseSaleService } from './house-sale.service';

describe('HouseSaleService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HouseSaleService]
    });
  });

  it('should be created', inject([HouseSaleService], (service: HouseSaleService) => {
    expect(service).toBeTruthy();
  }));
});
