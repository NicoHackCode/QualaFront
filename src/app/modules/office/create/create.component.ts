import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { OfficeService } from 'src/app/service/office.service';
import { NotifyService } from 'src/app/shared/components/notify/notify.service';
import { Office } from 'src/app/shared/interfaces/office';

/**
 * Componente para crear una nueva oficina.
 */
@Component({
  selector: 'office-create',
  templateUrl: './create.component.html',
})
export class CreateComponent implements OnInit {

  protected model: Office;

  constructor(
    private officeSrv: OfficeService,
    private router: Router,
    private route: ActivatedRoute,
    private notiSrv: NotifyService,
  ) { }

  /**
   * Método que se ejecuta al inicializar el componente.
   */
  ngOnInit(): void {
    this.getModel();
  }

  /**
   * Método privado para obtener el modelo de la oficina.
   */
  private getModel() {
    this.model = {
      id: null,
      idCodigo: null,
      descripcion: null,
      direccion: null,
      identificacion: null,
      monedaId: null,
    }
  }

  /**
   * Método para crear una nueva oficina.
   * @param model El modelo de la oficina a crear.
   */
  protected onCreate(model: Office) {
    this.officeSrv.add(model).subscribe(
      res => {
        this.notiSrv.add("Sucursal creada exitosamente.");
        this.router.navigateByUrl(`office/${res.idCodigo}/detail`);
      },
      err => { this.notiSrv.add("Error interno."); }
    )
  }
}
