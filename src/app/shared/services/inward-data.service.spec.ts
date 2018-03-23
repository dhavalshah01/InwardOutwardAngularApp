import { TestBed, inject } from '@angular/core/testing';

import { InwardDataService } from './inward-data.service';

describe('InwardServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [InwardDataService]
    });
  });

  it('should be created', inject([InwardDataService], (service: InwardDataService) => {
    expect(service).toBeTruthy();
  }));
});
