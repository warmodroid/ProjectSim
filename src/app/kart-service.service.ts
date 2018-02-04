import { Injectable } from '@angular/core';

@Injectable()
export class KartServiceService {
  itemsAdded = [];
  constructor() { }

  addToServiceCart(body:any){
  this.itemsAdded.push(body);
  }


  getToServiceCart(){
    return this.itemsAdded;
  }

}
