import { TestBed } from '@angular/core/testing';

import { MiniFormService } from './mini-form.service';

describe('MiniFormService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MiniFormService = TestBed.get(MiniFormService);
    expect(service).toBeTruthy();
  });
});
