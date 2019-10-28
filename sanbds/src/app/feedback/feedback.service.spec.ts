import { TestBed } from '@angular/core/testing';

import { CreateService } from '../create-bds/service/create.service';

describe('FeedbackService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CreateService = TestBed.get(CreateService);
    expect(service).toBeTruthy();
  });
});
