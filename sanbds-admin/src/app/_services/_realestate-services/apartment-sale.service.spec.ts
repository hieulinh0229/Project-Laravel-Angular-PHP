import { TestBed, inject } from '@angular/core/testing';

import { ApartmentSaleService } from './apartment-sale.service';

describe('ApartmentSaleService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ApartmentSaleService]
    });
  });

  it('should be created', inject([ApartmentSaleService], (service: ApartmentSaleService) => {
    expect(service).toBeTruthy();
  }));
});
