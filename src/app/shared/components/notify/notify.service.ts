import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

/**
 * Servicio de notificación que permite agregar y eliminar mensajes.
 */
@Injectable({
  providedIn: 'root'
})
export class NotifyService {
  /**
   * Observable que emite mensajes de notificación.
   */
  public data = new Subject<{ message: string }>();

  /**
   * Agrega un mensaje a la notificación.
   * @param message El mensaje a agregar.
   */
  public add(message: string) {
    this.data.next({ message });
  }

  /**
   * Elimina el mensaje de la notificación.
   */
  public remove() {
    this.data.next(null);
  }
}
