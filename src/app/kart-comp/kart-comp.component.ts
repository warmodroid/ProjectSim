import { Component, OnInit } from '@angular/core';
import { KartServiceService } from '../kart-service.service';

@Component({
  selector: 'app-kart-comp',
  templateUrl: './kart-comp.component.html',
  styleUrls: ['./kart-comp.component.css']
})
export class KartCompComponent implements OnInit {

  items = [];
  sessionItems: any;

  constructor(private kartSer: KartServiceService) {
    this.items = kartSer.getToServiceCart();
    this.sessionItems = localStorage.getItem('kart');
  }

  ngOnInit() {
  }

}
