import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ForbbidenComponent } from './forbbiden/forbbiden.component';
import { AuthGuard } from 'src/app/shared/guards/auth.guard';

const routes: Routes = [
  {
    path: '',
    component: ForbbidenComponent,
    canActivate: [AuthGuard]
  }
];

/**
 * Módulo de enrutamiento para la página de error de acceso prohibido.
 */
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ForbbidenRoutingModule { }
