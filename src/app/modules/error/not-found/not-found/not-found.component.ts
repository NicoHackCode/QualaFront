import { Component, OnInit, inject } from '@angular/core';

/**
 * Componente para la página de error 404 (página no encontrada).
 */
@Component({
  selector: 'app-not-found',
  templateUrl: './not-found.component.html',
})
export class NotFoundComponent implements OnInit {  

  /**
   * Método del ciclo de vida que se ejecuta al inicializar el componente.
   * Llama al método setBreadcrumb para configurar el breadcrumb.
   */
  ngOnInit(): void {
    this.setBreadcrumb();
  }

  /**
   * Método privado que configura el breadcrumb.
   */
  private setBreadcrumb() {
    const arr = [
      { title: '404', link: '**' },
    ]    
  }
}
