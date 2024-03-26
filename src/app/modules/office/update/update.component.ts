import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, catchError, filter, map, of, tap } from 'rxjs';
import { OfficeService } from 'src/app/service/office.service';
import { NotifyService } from 'src/app/shared/components/notify/notify.service';
import { Office } from 'src/app/shared/interfaces/office';

/**
 * Componente para la actualización de una oficina.
 */
@Component({
  selector: 'office-update',
  templateUrl: './update.component.html',
})
export class UpdateComponent implements OnInit {

  private code: number;
  protected model$: Observable<Office>;

  constructor(
    private officeSrv: OfficeService,
    private router: Router,
    private route: ActivatedRoute,
    private notiSrv: NotifyService,
  ) { }

  /**
   * Método que se ejecuta al inicializar el componente.
   * Obtiene el modelo de la oficina a actualizar.
   */
  ngOnInit(): void {
    this.getModel();
  }

  /**
   * Método privado para obtener el modelo de la oficina a actualizar.
   */
  private getModel() {
    this.route.params.subscribe(params => {
      this.code = params['code'];

      this.officeSrv.getItem(this.code)
        .subscribe(
          (data: Office) => {
            // Manejar los datos obtenidos
            this.model$ = of(data); 
          },
          (error) => {
            console.error('Error obteniendo la sucursal:', error);
            this.router.navigateByUrl('/ruta-alternativa');
          }
        );
    });
  }

  /**
   * Método para actualizar una oficina.
   * @param model El modelo de la oficina a actualizar.
   */
  protected onUpdate(model: Office) {
    if (model) {
      this.officeSrv.update(model).subscribe(
        res => {
          this.notiSrv.add("Sucursal actualizada exitosamente.");
          this.router.navigateByUrl(`office/${res.idCodigo}/detail`);
        },
        err => { this.notiSrv.add("No se pudo actualizar la oficina."); }
      )
    }
    else {
      
      this.officeSrv.remove(this.code).subscribe(
        res => {
          this.notiSrv.add("Sucursal eliminada exitosamente.");
          this.router.navigateByUrl(`office`);
        },
        err => { this.notiSrv.add("No se pudo eliminar la oficina."); }
      )
    }
  }
}
