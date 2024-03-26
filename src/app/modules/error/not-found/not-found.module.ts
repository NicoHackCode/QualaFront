import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotFoundRoutingModule } from './not-found-routing.module';
import { RouterModule } from '@angular/router';
import { NotFoundComponent } from './not-found/not-found.component';



/**
 * Módulo para la página de error 404 (página no encontrada).
 */
@NgModule({
  declarations: [
    NotFoundComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
  ],
  exports: [NotFoundRoutingModule],
})
export class NotFoundModule { }
