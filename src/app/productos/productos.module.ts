import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { ProductosListadoComponent } from './listado/listado.component';
import { ProductosRegistroComponent } from './registro/registro.component';

import { ProductosService } from './servicio/productos.service';
import { NuevoComponent } from './nuevo/nuevo.component'

@NgModule({
  declarations: [
    ProductosListadoComponent,
    ProductosRegistroComponent,
    NuevoComponent
  ],
  imports: [
    CommonModule,
    NgbModule,
    FormsModule,
    RouterModule,
    ReactiveFormsModule

  ],
  providers:[
    ProductosService
  ],
  exports: [
    ProductosListadoComponent,
    ProductosRegistroComponent,
    NuevoComponent
  ]
})
export class ProductosModule { }
