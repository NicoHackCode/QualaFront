import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegisterComponent } from './register/register.component';
import { ForgotPassComponent } from './forgot-pass/forgot-pass.component';
import { AuthRoutingModule } from './auth-routing.module';
import { SharedModule } from '../shared/shared/shared.module';
import LoginComponent from './login/login.component';

/**
 * Es responsable de gestionar los componentes y servicios relacionados con la autenticación.
 */

@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent,
    ForgotPassComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,

    AuthRoutingModule,
  ],
})
export class AuthModule { }
