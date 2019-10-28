import { TestBed } from '@angular/core/testing';

import { PlotsSaleService } from './plots-sale.service';

describe('PlotsSaleService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PlotsSaleService = TestBed.get(PlotsSaleService);
    expect(service).toBeTruthy();
  });
});
