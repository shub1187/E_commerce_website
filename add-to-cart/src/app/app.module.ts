import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './component/header/header.component';
import { CartComponent } from './component/cart/cart.component';
import { ProductsComponent } from './component/products/products.component';
import { HttpClientModule} from '@angular/common/http';
import { RegisterComponent } from './component/register/register.component';
import { LoginComponent } from './component/login/login.component'
import { AuthService } from './service/auth.service';
import { PageNotFoundComponent } from './component/page-not-found/page-not-found.component';
import { ApiService} from "./service/api.service"
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CartComponent,
    ProductsComponent,
    RegisterComponent,
    LoginComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [AuthService,ApiService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
