import { Component, OnInit, inject } from '@angular/core';
import { RouterLink } from '@angular/router';

/**
 * Componente para la página de error de acceso prohibido.
 */
@Component({
  selector: 'app-forbbiden',
  templateUrl: './forbbiden.component.html',
})
export class ForbbidenComponent implements OnInit {
  // constructor(breadSrv: BreadcrumbService) {}

  /**
   * Método que se ejecuta al inicializar el componente.
   */
  ngOnInit(): void {
    this.setBreadcrumb();
  }

  /**
   * Método privado para establecer el breadcrumb.
   */
  private setBreadcrumb() {
    const arr = [
      { title: 'Prohibido', link: 'forbbiden' },
    ]    
  }
}
