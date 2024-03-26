import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { HomeRoutingModule } from './home-routing.module';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared/shared.module';



/**
 * Módulo principal de la página de inicio.
 * Este módulo contiene los componentes y las configuraciones necesarias para la página de inicio.
 */
@NgModule({
  declarations: [
    HomeComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,

    RouterModule,
  ],
  exports: [HomeRoutingModule],
})
export class HomeModule { }
