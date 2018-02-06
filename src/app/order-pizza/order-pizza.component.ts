import { Component, OnInit } from '@angular/core';
import { OrderPizzaServiceService } from '../order-pizza-service.service';
import { KartServiceService } from '../kart-service.service';

@Component({
  selector: 'app-order-pizza',
  templateUrl: './order-pizza.component.html',
  styleUrls: ['./order-pizza.component.css']
})
export class OrderPizzaComponent implements OnInit {

  pizzaList: any;
  itemsAdded = [];
  totalCost = 0;

  constructor(private getPizzaService: OrderPizzaServiceService, private kartSer: KartServiceService) {
   getPizzaService.getPizza().subscribe(
      (res) => {this.pizzaList = res; });



   }

  ngOnInit() {
  }

  addCart(name: any, price: any) {
    let body = {
      "name": name,
      "price": price
    };
    // localStorage.clear();
    this.itemsAdded.push(body);
    this.kartSer.addToServiceCart(body);
    // alert(JSON.stringify(this.itemsAdded));
    this.totalCost = this.totalCost + Number(price);
    sessionStorage.setItem('kart', JSON.stringify(this.itemsAdded));
    sessionStorage.setItem('totalCost', JSON.stringify(this.totalCost));

  }

}
