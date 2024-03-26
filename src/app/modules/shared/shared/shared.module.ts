import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GroupFormComponent } from 'src/app/shared/components/group-form/group-form.component';
import { InputDirective } from 'src/app/shared/directives/styles/input.directive';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';



/**
 * Módulo compartido que contiene componentes y directivas utilizados en varios módulos de la aplicación.
 */
@NgModule({
  declarations: [
    InputDirective,
    GroupFormComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
  ],
  exports: [
    InputDirective,
    GroupFormComponent,
    ReactiveFormsModule,
    RouterModule,
  ]
})
export class SharedModule { }
