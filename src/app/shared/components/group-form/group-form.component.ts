import { Component, Input, OnInit } from '@angular/core';
import { AbstractControl } from '@angular/forms';

/**
 * Componente para el formulario de grupo.
 */
@Component({
  selector: 'group-form',
  templateUrl: './group-form.component.html',
})
export class GroupFormComponent implements OnInit {
  /**
   * Control del formulario.
   */
  @Input() control: AbstractControl<any, any>;
  
  /**
   * Etiqueta del formulario.
   */
  @Input() label: string | null;

  ngOnInit(): void { }
}
