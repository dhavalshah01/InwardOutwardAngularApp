import { TestBed, inject } from '@angular/core/testing';

import { InwardStatusService } from './inward-status.service';

describe('InwardStatusService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [InwardStatusService]
    });
  });

  it('should be created', inject([InwardStatusService], (service: InwardStatusService) => {
    expect(service).toBeTruthy();
  }));
});
