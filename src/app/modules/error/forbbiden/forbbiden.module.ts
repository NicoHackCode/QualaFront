import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ForbbidenComponent } from './forbbiden/forbbiden.component';
import { ForbbidenRoutingModule } from './forbbiden-routing.module';
import { RouterModule } from '@angular/router';



/**
 * Módulo que contiene el componente ForbbidenComponent y sus dependencias.
 */
@NgModule({
  declarations: [
    ForbbidenComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
  ],
  exports: [ForbbidenRoutingModule],
})
export class ForbbidenModule { }
