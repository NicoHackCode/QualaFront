import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared/shared.module';
import { OfficeRoutingModule } from './office-routing.module';
import { CreateComponent } from './create/create.component';
import { UpdateComponent } from './update/update.component';
import { DetailComponent } from './detail/detail.component';
import { FormComponent } from './form/form.component';



/**
 * Módulo de la oficina.
 * 
 * Este módulo contiene los componentes y configuraciones relacionados con la oficina.
 */
@NgModule({
  declarations: [
    CreateComponent,
    UpdateComponent,
    DetailComponent,
    FormComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
  ],
  exports: [OfficeRoutingModule],
})
export class OfficeModule { }
