import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import { LoginComponentComponent } from './login/login-component/login-component.component';
import { RegisterComponentComponent } from './login/register-component/register-component.component';
import { GeneralComponent } from './general/general/general.component';
import { ProductosListadoComponent } from './productos/listado/listado.component';
import { ProductosRegistroComponent } from './productos/registro/registro.component';



const routes: Routes = [
  {path : "", redirectTo :"/login", pathMatch : 'full'},
  {path:"login",component: LoginComponentComponent},
  {path:"register",component: RegisterComponentComponent},
  {path:"general",component: GeneralComponent},
  {path:"productos",component: ProductosListadoComponent},
  {path:"productos/registro/:id",component: ProductosRegistroComponent},
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
