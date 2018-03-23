import { TestBed, inject } from '@angular/core/testing';

import { RefInwardsService } from './ref-inwards.service';

describe('RefInwardsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RefInwardsService]
    });
  });

  it('should be created', inject([RefInwardsService], (service: RefInwardsService) => {
    expect(service).toBeTruthy();
  }));
});
