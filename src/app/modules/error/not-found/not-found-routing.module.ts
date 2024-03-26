import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from 'src/app/shared/guards/auth.guard';
import { NotFoundComponent } from './not-found/not-found.component';

const routes: Routes = [
  {
    path: '',
    component: NotFoundComponent,
    canActivate: [AuthGuard]
  }
];

/**
 * Módulo de enrutamiento para la página de error 404 (no encontrada).
 * Este módulo importa y exporta el módulo de enrutamiento de Angular RouterModule.
 */
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NotFoundRoutingModule { }
