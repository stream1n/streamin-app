import { TestBed } from '@angular/core/testing';

import { RecresultsService } from './recresults.service';

describe('RecresultsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RecresultsService = TestBed.get(RecresultsService);
    expect(service).toBeTruthy();
  });
});
