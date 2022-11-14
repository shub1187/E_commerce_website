import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './component/cart/cart.component';
import { LoginComponent } from './component/login/login.component';
import { PageNotFoundComponent } from './component/page-not-found/page-not-found.component';
import { ProductsComponent } from './component/products/products.component';
import { RegisterComponent } from './component/register/register.component';

const routes: Routes = [     //Defining our routes
    {path:"",redirectTo:"products",pathMatch:"full"},//default Route Home page
    {path:"products", component:ProductsComponent}, // Home page header + Product component
    {path:"cart",component:CartComponent},  // cart page with product table and grand total and discount
    {path:"login",component:LoginComponent}, // user login page
    {path:"register",component:RegisterComponent}, // user registeration page
    {path:"**",component:PageNotFoundComponent} // if user tries to type any other path other than mentioned routes
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
