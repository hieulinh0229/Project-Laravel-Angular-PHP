import { TestBed } from '@angular/core/testing';

import { PlotsRentService } from './plots-rent.service';

describe('PlotsRentService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PlotsRentService = TestBed.get(PlotsRentService);
    expect(service).toBeTruthy();
  });
});
