import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { OrderPizzaComponent } from './order-pizza/order-pizza.component';
import { BuildPizzaComponent } from './build-pizza/build-pizza.component';
import { routing } from './appRoutes';
import { HttpClientModule } from '@angular/common/http';
import { BuildPizzaServiceService } from './build-pizza-service.service';
import { OrderPizzaServiceService } from './order-pizza-service.service';
import { KartCompComponent } from './kart-comp/kart-comp.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    OrderPizzaComponent,
    BuildPizzaComponent,
    KartCompComponent
  ],
  imports: [
    BrowserModule, routing, HttpClientModule
  ],
  providers: [BuildPizzaServiceService, OrderPizzaServiceService],
  bootstrap: [AppComponent]
})
export class AppModule {  }
