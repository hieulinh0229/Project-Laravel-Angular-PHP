import { TestBed, inject } from '@angular/core/testing';

import { PlotSaleService } from './plot-sale.service';

describe('PlotSaleService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PlotSaleService]
    });
  });

  it('should be created', inject([PlotSaleService], (service: PlotSaleService) => {
    expect(service).toBeTruthy();
  }));
});
