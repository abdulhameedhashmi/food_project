import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartPageComponent } from './cart-page/cart-page.component';
import { CartComponent } from './component/cart/cart.component';
import { FoodpageComponent } from './foodpage/foodpage.component';
const routes: Routes = [
  {path:'',component:CartComponent},
  {path:'search/:searchItem',component:CartComponent},
  {path:'tag/:tag',component:CartComponent},
  {path:'food/:id',component:FoodpageComponent},
  {path:'cart-page',component:CartPageComponent}
   
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
