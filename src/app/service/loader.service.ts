import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
/**
 * Servicio para controlar el estado de carga en la aplicación.
 */
@Injectable({
  providedIn: 'root'
})
export class LoaderService {
    isLoading = new Subject<boolean>();

    /**
     * Muestra el indicador de carga.
     */
    show() {
        this.isLoading.next(true);
    }

    /**
     * Oculta el indicador de carga.
     */
    hide() {
        this.isLoading.next(false);
    }
}
