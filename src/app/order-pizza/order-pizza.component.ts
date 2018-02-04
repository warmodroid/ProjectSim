import { Component, OnInit } from '@angular/core';
import { OrderPizzaServiceService } from '../order-pizza-service.service';

@Component({
  selector: 'app-order-pizza',
  templateUrl: './order-pizza.component.html',
  styleUrls: ['./order-pizza.component.css']
})
export class OrderPizzaComponent implements OnInit {

  pizzaList: any;
  itemsAdded=[];

  constructor(private getPizzaService: OrderPizzaServiceService) {
    this.pizzaList = getPizzaService.getPizza().subscribe(
      (res) => {this.pizzaList = res; });
   }

  ngOnInit() {
  }

  addCart(name:any,price:any){
    this.itemsAdded.push(name);
    alert("Added items "+this.itemsAdded);
  }

}
