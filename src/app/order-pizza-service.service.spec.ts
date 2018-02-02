import { TestBed, inject } from '@angular/core/testing';

import { OrderPizzaServiceService } from './order-pizza-service.service';

describe('OrderPizzaServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [OrderPizzaServiceService]
    });
  });

  it('should be created', inject([OrderPizzaServiceService], (service: OrderPizzaServiceService) => {
    expect(service).toBeTruthy();
  }));
});
