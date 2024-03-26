import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import LoginComponent from './login/login.component';
import { ForgotPassComponent } from './forgot-pass/forgot-pass.component';
import { RegisterComponent } from './register/register.component';

/**
 * Define las rutas para el módulo de autenticación.
 */
const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent,
  },

  {
    path: 'register',
    component: RegisterComponent,
  },

  {
    path: 'forgot-password',
    component: ForgotPassComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
