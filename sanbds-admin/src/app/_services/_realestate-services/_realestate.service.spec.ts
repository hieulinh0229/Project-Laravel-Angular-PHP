import { TestBed, inject } from '@angular/core/testing';

import { RealestateService } from './_realestate.service';

describe('RealestateService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RealestateService]
    });
  });

  it('should be created', inject([RealestateService], (service: RealestateService) => {
    expect(service).toBeTruthy();
  }));
});
