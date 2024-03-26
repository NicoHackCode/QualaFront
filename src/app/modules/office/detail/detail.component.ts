import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { OfficeService } from 'src/app/service/office.service';
import { NotifyService } from 'src/app/shared/components/notify/notify.service';
import { Office } from 'src/app/shared/interfaces/office';

/**
 * Componente para mostrar los detalles de una oficina.
 */
@Component({
  selector: 'office-detail',
  templateUrl: './detail.component.html',
})
export class DetailComponent implements OnInit {

  protected model$: Observable<Office>;

  constructor(
    private officeSrv: OfficeService,
    private router: Router,
    private route: ActivatedRoute,
    private notiSrv: NotifyService,
    
  ) { }

  /**
   * Método que se ejecuta al inicializar el componente.
   * Obtiene el modelo de la oficina y agrega el breadcrumb.
   */
  ngOnInit(): void {
    this.getModel();
    this.addBreadcum();
  }

  /**
   * Método privado para obtener el modelo de la oficina.
   * Si no se encuentra la oficina, redirige a la página de inicio y muestra una notificación.
   */
  private getModel() {
    try {
      this.route.params.subscribe(params => {
        const code = params['code'];
        this.model$ = this.officeSrv.getItem(code);
      });
    }
    catch (error) {
      this.router.navigate(['home']);
      this.notiSrv.add('Sucursal no encontrada')
    }
  }

  /**
   * Método privado para agregar el breadcrumb.
   */
  private addBreadcum() {

  }
}
