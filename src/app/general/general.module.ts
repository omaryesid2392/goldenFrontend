import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeaderComponent } from './header/header.component';
import { MenuComponent } from './menu/menu.component';
import { GeneralComponent } from './general/general.component';
import { ProductosModule } from '../productos/productos.module';
import { RouterModule } from '@angular/router';




@NgModule({
  declarations: [
    GeneralComponent,
    HeaderComponent,
    MenuComponent,

  ],
  imports: [
    CommonModule,
    ProductosModule,
    RouterModule
    
  ],
  exports:[
    GeneralComponent,
    HeaderComponent,
    MenuComponent,
  ]

})
export class GeneralModule { }
