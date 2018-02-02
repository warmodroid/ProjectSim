import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class OrderPizzaServiceService {

  constructor(private http: HttpClient) { }

  getPizza() {
    return this.http.get('http://localhost:3000/orderPizza');
  }

}
