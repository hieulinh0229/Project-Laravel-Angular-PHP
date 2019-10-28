import { TestBed } from '@angular/core/testing';

import { ApartmentSaleService } from './apartment-sale.service';

describe('ApartmentSaleService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ApartmentSaleService = TestBed.get(ApartmentSaleService);
    expect(service).toBeTruthy();
  });
});
