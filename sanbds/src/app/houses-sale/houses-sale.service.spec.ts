import { TestBed } from '@angular/core/testing';
import { HousesSaleService } from './houses-sale.service';


describe('HousesSaleServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: HousesSaleService = TestBed.get(HousesSaleService);
    expect(service).toBeTruthy();
  });
});
