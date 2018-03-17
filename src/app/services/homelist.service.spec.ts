import { TestBed, inject } from '@angular/core/testing';

import { HomelistService } from './homelist.service';

describe('HomelistService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HomelistService]
    });
  });

  it('should be created', inject([HomelistService], (service: HomelistService) => {
    expect(service).toBeTruthy();
  }));
});
