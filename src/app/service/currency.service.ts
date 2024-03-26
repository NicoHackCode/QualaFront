import { Injectable } from '@angular/core';
import { map, of } from 'rxjs';
import { Currency } from '../shared/interfaces/currency';

/**
 * Servicio para obtener la lista de monedas.
 */
@Injectable({
  providedIn: 'root'
})
export class CurrencyService {

  /**
   * Obtiene la lista de monedas.
   * @returns Un Observable que emite un array de objetos Currency.
   */
  getItems(){
    return of([
      { id: 1, code: "COL" },
      { id: 2, code: "USD" },
      { id: 3, code: "GBP" },
      { id: 4, code: "EUR" },
      { id: 5, code: "ARS" },
    ] as Currency[]);
  }
}
