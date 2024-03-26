import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { UntypedFormBuilder, UntypedFormControl, UntypedFormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { AuthService } from 'src/app/service/auth.service';
import { CurrencyService } from 'src/app/service/currency.service';
import { Currency } from 'src/app/shared/interfaces/currency';
import { Office } from 'src/app/shared/interfaces/office';

/**
 * Componente de formulario para la oficina.
 */
@Component({
  selector: 'office-form',
  templateUrl: './form.component.html',
})
export class FormComponent implements OnInit {

  /**
   * Modelo de la oficina.
   */
  @Input() model: Office;

  /**
   * Título del formulario.
   */
  @Input() title: string;

  /**
   * Indica si se debe mostrar el botón en el formulario.
   */
  @Input() showBtn: boolean = true;

  /**
   * Evento que se emite cuando se crea un nuevo modelo de oficina.
   */
  @Output() newModel: EventEmitter<Office> = new EventEmitter();

  protected form: UntypedFormGroup;
  protected currencies$: Observable<Currency[]>;

  constructor(
    private fb: UntypedFormBuilder,
    private currencySrv: CurrencyService,
  ) { }

  ngOnInit(): void {
    this.createForm();
    this.getCurrencies();
  }

  /**
   * Crea el formulario de la oficina.
   */
  private createForm() {
    const required = Validators.required;
    const disabled = !this.showBtn && this.model.idCodigo;

    this.form = this.fb.group({
      idCodigo: new UntypedFormControl({ value: this.model.idCodigo || 0, disabled: disabled }, Validators.compose([])),
      descripcion: new UntypedFormControl({ value: this.model.descripcion, disabled: disabled }, Validators.compose([])),
      direccion: new UntypedFormControl({ value: this.model.direccion, disabled: disabled }, Validators.compose([required])),
      identificacion: new UntypedFormControl({ value: this.model.identificacion, disabled: disabled }, Validators.compose([required])),
      monedaId: new UntypedFormControl({ value: this.model.monedaId, disabled: disabled }, Validators.compose([required])),
    });
  }

  /**
   * Obtiene las monedas disponibles.
   */
  private getCurrencies() {
    this.currencies$ = this.currencySrv.getItems();
  }

  /**
   * Verifica si el formulario tiene errores.
   * @returns `true` si el formulario tiene errores, de lo contrario `false`.
   */
  private hasErrors(): boolean {
    this.form.markAllAsTouched();
    return this.form.invalid;
  }

  /**
   * Maneja el evento de envío del formulario.
   * Realiza validaciones y emite el nuevo modelo de oficina.
   */
  protected onSubmit() {
    // validaciones
    if (this.hasErrors()) { return; }

    const model: Office = this.form.value;
    this.newModel.emit(model);
  }

  /**
   * Maneja el evento de eliminación del modelo de oficina.
   * Muestra una confirmación y emite el evento `newModel` con valor `null`.
   * @param model El modelo de oficina a eliminar.
   */
  protected onDelete(model: Office) {
    const cfm = confirm('¿Desea eliminar la Sucursal?');

    if (cfm) {
      this.newModel.emit(null);
    }
  }

  /**
   * Emite el modelo de oficina actual.
   */
  protected emitModel() {
    this.newModel.emit(this.model);
  }
}
