import { TestBed } from '@angular/core/testing';

import { DataalertService } from './dataalert.service';

describe('DataalertService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DataalertService = TestBed.get(DataalertService);
    expect(service).toBeTruthy();
  });
});
