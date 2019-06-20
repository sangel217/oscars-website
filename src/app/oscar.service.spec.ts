import { TestBed, inject } from '@angular/core/testing';

import { OscarService } from './oscar.service';

describe('OscarService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [OscarService]
    });
  });

  it('should be created', inject([OscarService], (service: OscarService) => {
    expect(service).toBeTruthy();
  }));
});
