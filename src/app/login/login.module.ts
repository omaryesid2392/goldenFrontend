import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponentComponent } from './login-component/login-component.component';
import { RegisterComponentComponent } from './register-component/register-component.component';



@NgModule({
  declarations: [
    LoginComponentComponent,
    RegisterComponentComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    LoginComponentComponent,
    RegisterComponentComponent
  ]
})
export class LoginModule { }
