import { Component, OnInit } from '@angular/core';
import { BuildPizzaServiceService } from '../build-pizza-service.service';
import { CheckboxControlValueAccessor } from '@angular/forms';

@Component({
  selector: 'app-build-pizza',
  templateUrl: './build-pizza.component.html',
  styleUrls: ['./build-pizza.component.css']
})
export class BuildPizzaComponent implements OnInit {

  indiList: any;
  totalCost = 0;
  itemsAdded= [];

  constructor(private getPizzaService: BuildPizzaServiceService) {
    getPizzaService.getIndi().subscribe(
      (res) => {this.indiList = res; console.log(res); });

   }

   newCheck(price: any, name: any){
     if (!this.itemsAdded.filter(nam => nam == name)[0]) {
      this.itemsAdded.push(name);
      console.log(this.itemsAdded);
      this.totalCost = this.totalCost + Number(price);
     }
     else {
      // Item to remove
      this.itemsAdded = this.itemsAdded.filter(obj => obj !== name);
      console.log(this.itemsAdded);
      this.totalCost = this.totalCost - Number(price);
     }
     // console.log(price);
     // console.log(name);
   }

  ngOnInit() {
  }

}
