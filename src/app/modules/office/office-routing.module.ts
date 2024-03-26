import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailComponent } from './detail/detail.component';
import { UpdateComponent } from './update/update.component';
import { CreateComponent } from './create/create.component';
import { AuthGuard } from 'src/app/shared/guards/auth.guard';

/**
 * Rutas para el módulo de oficina.
 */
const routes: Routes = [
  {
    path: 'office',
    redirectTo: 'home'
  },
  {
    path: ':code/detail',
    component: DetailComponent,
    canActivate: [AuthGuard]
  },

  {
    path: 'create',
    component: CreateComponent,
    canActivate: [AuthGuard]
  },

  {
    path: ':code/update',
    component: UpdateComponent,
    canActivate: [AuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OfficeRoutingModule { }
