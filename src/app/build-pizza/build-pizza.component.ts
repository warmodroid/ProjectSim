import { Component, OnInit } from '@angular/core';
import { BuildPizzaServiceService } from '../build-pizza-service.service';

@Component({
  selector: 'app-build-pizza',
  templateUrl: './build-pizza.component.html',
  styleUrls: ['./build-pizza.component.css']
})
export class BuildPizzaComponent implements OnInit {

  indiList: any;

  constructor(private getPizzaService: BuildPizzaServiceService) {
    this.indiList = getPizzaService.getIndi().subscribe(
      (res) => {this.indiList = res; });
   }

  ngOnInit() {
  }

}
