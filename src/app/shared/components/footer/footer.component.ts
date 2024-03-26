import { Component } from '@angular/core';

/**
 * Componente de pie de página.
 */
@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
})
export class FooterComponent {
  /**
   * Año actual.
   */
  protected currentYear: number = new Date().getFullYear();
}
