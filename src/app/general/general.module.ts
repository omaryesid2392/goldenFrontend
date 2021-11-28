import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeaderComponent } from './header/header.component';
import { MenuComponent } from './menu/menu.component';
import { GeneralComponent } from './general/general.component';
import { ProductosModule } from '../productos/productos.module';




@NgModule({
  declarations: [
    GeneralComponent,
    HeaderComponent,
    MenuComponent,

  ],
  imports: [
    CommonModule,
    ProductosModule,
  ],
  exports:[
    GeneralComponent,
    HeaderComponent,
    MenuComponent,
  ]

})
export class GeneralModule { }
