import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import{LoginModule} from './login/login.module';
import { AppRoutingModule } from './app-routing.module';
import { GeneralModule } from './general/general.module';
import { ProductosModule } from './productos/productos.module';
import { HttpClientModule } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';



@NgModule({
  declarations: [
    AppComponent,

  ],
  imports: [
    BrowserModule,
    LoginModule,
    AppRoutingModule,
    GeneralModule,
    ProductosModule,
    HttpClientModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
