import { Component, OnInit, inject } from '@angular/core';
import { NotifyService } from './notify.service';
import { map } from 'rxjs';

/**
 * Componente de notificación que muestra un mensaje y se cierra automáticamente después de un tiempo determinado.
 */
@Component({
  selector: 'app-notify',
  templateUrl: './notify.component.html',
})
export class NotifyComponent implements OnInit {
  protected data: { message: string };

  private seconds: number = 5; // Cambiado a 5 segundos como valor predeterminado
  private timer: ReturnType<typeof setTimeout>; // Variable para almacenar el temporizador

  constructor(private notiSrv: NotifyService) { }

  /**
   * Método de ciclo de vida que se ejecuta después de que el componente se ha inicializado.
   */
  ngOnInit(): void {
    this.open();
  }

  /**
   * Abre la notificación y comienza el temporizador para cerrarla automáticamente.
   */
  private open() {
    this.notiSrv.data
      .pipe(
        map(aux => {
          this.data = aux;
          if (this.data) { this.startAutoClose(); } 
        })
      )
      .subscribe();
  }

  /**
   * Cierra la notificación y detiene el temporizador.
   */
  protected close() {
    this.data = null;
    this.notiSrv.remove();
    this.clearTimer(); 
  }

  /**
   * Inicia el temporizador para cerrar automáticamente la notificación.
   */
  private startAutoClose() {
    this.timer = setTimeout(() => { this.close(); }, this.seconds * 1000);
  }

  /**
   * Detiene el temporizador.
   */
  private clearTimer() {
    clearTimeout(this.timer);
  }

  /**
   * Pausa el temporizador cuando el usuario hace hover sobre la notificación.
   */
  protected pauseOnHover() {
    this.clearTimer();
  }

  /**
   * Reanuda el temporizador cuando el usuario retira el cursor de la notificación.
   */
  protected resumeOnLeave() {
    this.startAutoClose();
  }
}
