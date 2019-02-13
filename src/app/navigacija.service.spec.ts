import { TestBed, inject } from '@angular/core/testing';

import { NavigacijaService } from './navigacija.service';

describe('NavigacijaService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [NavigacijaService]
    });
  });

  it('should be created', inject([NavigacijaService], (service: NavigacijaService) => {
    expect(service).toBeTruthy();
  }));
});
