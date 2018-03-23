import { TestBed, inject } from '@angular/core/testing';

import { PurposeofinwService } from './purposeofinw.service';

describe('PurposeofinwService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PurposeofinwService]
    });
  });

  it('should be created', inject([PurposeofinwService], (service: PurposeofinwService) => {
    expect(service).toBeTruthy();
  }));
});
