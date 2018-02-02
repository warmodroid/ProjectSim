import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable()
export class BuildPizzaServiceService {

  constructor(private http: HttpClient) {}
   getIndi() {
    return this.http.get('http://localhost:3000/buildPizza');
  }

}
