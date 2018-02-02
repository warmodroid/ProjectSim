import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { OrderPizzaComponent } from './order-pizza/order-pizza.component';
import { BuildPizzaComponent } from './build-pizza/build-pizza.component';
import { routing } from './appRoutes';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    OrderPizzaComponent,
    BuildPizzaComponent
  ],
  imports: [
    BrowserModule, routing, HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {  }
