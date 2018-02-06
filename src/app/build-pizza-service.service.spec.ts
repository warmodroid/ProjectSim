import { TestBed, inject } from '@angular/core/testing';

import { BuildPizzaServiceService } from './build-pizza-service.service';
import { HttpClientModule } from '@angular/common/http';
describe('BuildPizzaServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BuildPizzaServiceService], imports: [HttpClientModule]
    });
  });

  it('should be created', inject([BuildPizzaServiceService], (service: BuildPizzaServiceService) => {
    expect(service).toBeTruthy();
  }));
});
