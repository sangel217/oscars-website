import { TestBed, inject } from '@angular/core/testing';

import { RedCarpetService } from './red-carpet.service';

describe('RedCarpetService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RedCarpetService]
    });
  });

  it('should be created', inject([RedCarpetService], (service: RedCarpetService) => {
    expect(service).toBeTruthy();
  }));
});
