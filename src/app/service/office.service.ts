import { Injectable } from '@angular/core';
import { Observable, map, of } from 'rxjs';
import { BaseService } from './base.service';
import { Office } from '../shared/interfaces/office';

/**
 * Servicio para manejar las operaciones relacionadas con las oficinas.
 */
@Injectable({
  providedIn: 'root'
})
export class OfficeService extends BaseService {

  constructor() { super(); }

  /**
   * Obtiene todas las oficinas.
   * @param params Parámetros opcionales para filtrar la lista de oficinas.
   * @returns Un Observable que emite un array de objetos de tipo Office.
   */
  getItems(params: any = null): Observable<Office[]> {
    return this.get(`${this.environment.office}getallbranchoffice`, params).pipe(map((res) => res.result as Office[]));
  }

  /**
   * Obtiene una oficina por su ID.
   * @param id El ID de la oficina a obtener.
   * @returns Un Observable que emite un objeto de tipo Office.
   */
  getItem(id: number): Observable<Office> {
    return this.get(`${this.environment.office}getbranchofficeid/${id}`).pipe(map((res) => res.result as Office));
  }

  /**
   * Agrega una nueva oficina.
   * @param model El objeto de tipo Office que representa la nueva oficina a agregar.
   * @returns Un Observable que emite un objeto de tipo Office.
   */
  add(model: Office): Observable<Office> {
    return this.post(`${this.environment.office}insertnewbranchoffice`, model).pipe(map((res) => res.result as Office));
  }

  /**
   * Actualiza una oficina existente.
   * @param model El objeto de tipo Office que representa la oficina a actualizar.
   * @returns Un Observable que emite un objeto de tipo Office.
   */
  update(model: Office): Observable<Office> {
    return this.put(`${this.environment.office}${model.idCodigo}`, model).pipe(map((res) => res.result as Office));
  }

  /**
   * Elimina una oficina por su ID.
   * @param id El ID de la oficina a eliminar.
   * @returns Un Observable que emite un objeto de tipo Office.
   */
  remove(id: number): Observable<Office> {
    return this.delete(`${this.environment.office}${id}`).pipe(map((res) => res.result as Office));
  }
}
