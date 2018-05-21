import { TestBed, inject } from '@angular/core/testing';

import { ZasranetsService } from './zasranets.service';

describe('ZasranetsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ZasranetsService]
    });
  });

  it('should be created', inject([ZasranetsService], (service: ZasranetsService) => {
    expect(service).toBeTruthy();
  }));
});
