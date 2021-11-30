import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import { LoginComponentComponent } from './login/login-component/login-component.component';
import { RegisterComponentComponent } from './login/register-component/register-component.component';
import { GeneralComponent } from './general/general/general.component';
import { ProductosListadoComponent } from './productos/listado/listado.component';
import { ProductosRegistroComponent } from './productos/registro/registro.component';
import { NuevoComponent } from './productos/nuevo/nuevo.component';



const routes: Routes = [
  {path : "", redirectTo :"/general", pathMatch : 'full'},
  {path:"login",component: LoginComponentComponent},
  {path:"register",component: RegisterComponentComponent},
  {path:"general",component: ProductosListadoComponent},
  {path:"productos",component: ProductosListadoComponent},
  {path:"productos/registro/:id",component: ProductosRegistroComponent},
  {path:"productos/nuevo",component: NuevoComponent},
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports:[
    RouterModule
  ]

})
export class AppRoutingModule { }
