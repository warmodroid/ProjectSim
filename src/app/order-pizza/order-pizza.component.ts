import { Component, OnInit } from '@angular/core';
import { OrderPizzaServiceService } from '../order-pizza-service.service';

@Component({
  selector: 'app-order-pizza',
  templateUrl: './order-pizza.component.html',
  styleUrls: ['./order-pizza.component.css']
})
export class OrderPizzaComponent implements OnInit {

  pizzaList: any;

  constructor(private getPizzaService: OrderPizzaServiceService) {
    this.pizzaList = getPizzaService.getPizza().subscribe(
      (res) => {this.pizzaList = res; });
   }

  ngOnInit() {
  }

}
