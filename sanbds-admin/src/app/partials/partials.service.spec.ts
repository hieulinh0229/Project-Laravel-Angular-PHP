import { TestBed } from '@angular/core/testing';

import { PartialsService } from './partials.service';

describe('PartialsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PartialsService = TestBed.get(PartialsService);
    expect(service).toBeTruthy();
  });
});
