import { TestBed } from '@angular/core/testing';

import { FormcandidateService } from './formcandidate.service';

describe('FormcandidateService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FormcandidateService = TestBed.get(FormcandidateService);
    expect(service).toBeTruthy();
  });
});
