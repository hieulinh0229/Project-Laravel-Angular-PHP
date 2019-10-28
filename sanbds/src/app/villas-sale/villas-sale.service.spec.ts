import { TestBed } from '@angular/core/testing';

import { VillasSaleService } from './villas-sale.service';

describe('VillasSaleService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: VillasSaleService = TestBed.get(VillasSaleService);
    expect(service).toBeTruthy();
  });
});
