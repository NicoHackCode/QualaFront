import { Component, OnInit, inject } from '@angular/core';
import { UntypedFormBuilder, UntypedFormControl, UntypedFormGroup, Validators } from '@angular/forms';
import { OfficeService } from 'src/app/service/office.service';
import { Office } from 'src/app/shared/interfaces/office';

/**
 * Componente de la página de inicio.
 */
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent implements OnInit {

  private fb = inject(UntypedFormBuilder);
  private officeSrv = inject(OfficeService);

  protected form: UntypedFormGroup;
  protected items: Office[];
  protected filterItems: Office[];

  /**
   * Método que se ejecuta al inicializar el componente.
   */
  ngOnInit(): void {
    this.createForm();
    this.getItems();
  }

  /**
   * Crea el formulario.
   */
  private createForm() {
    this.form = this.fb.group({
      query: new UntypedFormControl(null),
    });
  }

  /**
   * Obtiene los elementos.
   */
  private getItems() {
    this.officeSrv.getItems()
      .subscribe(items => {
        this.items = this.filterItems = items;
      })
  }

  /**
   * Maneja el evento de búsqueda.
   * @param event El evento de búsqueda.
   */
  protected onSearch(event: Event) {
    const value = (event.target as HTMLInputElement).value;

    /**
     * Filtra recursivamente un objeto.
     * @param obj El objeto a filtrar.
     * @param filterValue El valor de filtro.
     * @returns true si el objeto coincide con el filtro, false de lo contrario.
     */
    const filterRecursive = (obj: any, filterValue: string): boolean => {
      for (const key in obj) {
        if (typeof obj[key] === 'object' && obj[key] !== null) {
          if (filterRecursive(obj[key], filterValue)) {
            return true;
          }
        } else if (obj[key] && obj[key].toString().toLowerCase().includes(filterValue)) {
          return true;
        }
      }
      return false;
    };

    /**
     * Filtra recursivamente un array de modelos.
     * @param models Los modelos a filtrar.
     * @param filterValue El valor de filtro.
     * @returns Los modelos que coinciden con el filtro.
     */
    const filterModelsRecursive = (models: any[], filterValue: string): any[] => {
      return models.filter(m => filterRecursive(m, filterValue));
    };

    if (value) {
      const lowercaseValue = value.toLowerCase();
      this.filterItems = filterModelsRecursive(this.items, lowercaseValue);
    } else {
      this.filterItems = this.items;
    }
  }
}
