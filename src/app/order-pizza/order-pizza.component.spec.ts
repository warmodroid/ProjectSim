import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderPizzaComponent } from './order-pizza.component';
import { OrderPizzaServiceService } from '../order-pizza-service.service';

import { HttpClient } from '@angular/common/http';

describe('OrderPizzaComponent', () => {
  let component: OrderPizzaComponent;
  let fixture: ComponentFixture<OrderPizzaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrderPizzaComponent ],
      providers: [OrderPizzaServiceService, HttpClient]

    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrderPizzaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
