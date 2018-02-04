import { TestBed, inject } from '@angular/core/testing';

import { KartServiceService } from './kart-service.service';

describe('KartServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [KartServiceService]
    });
  });

  it('should be created', inject([KartServiceService], (service: KartServiceService) => {
    expect(service).toBeTruthy();
  }));
});
