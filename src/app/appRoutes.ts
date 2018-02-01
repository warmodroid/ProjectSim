import {Routes} from '@angular/router';
import { BuildPizzaComponent } from './build-pizza/build-pizza.component';
import { HomeComponent } from './home/home.component';
import { OrderPizzaComponent } from './order-pizza/order-pizza.component';
import { RouterModule } from '@angular/router';


const AppRoutes: Routes = [
    {path: 'BuildPizzaComp', component: BuildPizzaComponent},
    {path: 'HomeComp', component: HomeComponent},
    {path: 'OrderPizzaComp', component: OrderPizzaComponent}
];



export const routing = RouterModule.forRoot(AppRoutes);
