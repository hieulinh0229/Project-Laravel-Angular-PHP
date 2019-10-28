import { TestBed, inject } from '@angular/core/testing';

import { PlotRentService } from './plot-rent.service';

describe('PlotRentService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PlotRentService]
    });
  });

  it('should be created', inject([PlotRentService], (service: PlotRentService) => {
    expect(service).toBeTruthy();
  }));
});
