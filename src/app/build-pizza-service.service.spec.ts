import { TestBed, inject } from '@angular/core/testing';

import { BuildPizzaServiceService } from './build-pizza-service.service';

describe('BuildPizzaServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BuildPizzaServiceService]
    });
  });

  it('should be created', inject([BuildPizzaServiceService], (service: BuildPizzaServiceService) => {
    expect(service).toBeTruthy();
  }));
});
