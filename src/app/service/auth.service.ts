import { Injectable } from '@angular/core';
import { Observable, Subject, catchError, first, map, of, tap } from 'rxjs';
import { BaseService } from './base.service';
import { AuthApi } from '../shared/interfaces/auth-api';
import { User } from '../shared/interfaces/user';

/**
 * Servicio de autenticación.
 */
@Injectable({
  providedIn: 'root'
})
/**
 * Servicio de autenticación.
 */
export class AuthService extends BaseService {

  private currentUser: User;

  constructor() { super(); }

  /**
   * Realiza el inicio de sesión.
   * @param data - Los datos de inicio de sesión.
   * @returns Un observable que emite la respuesta del inicio de sesión.
   */
  public login(data: any): Observable<any> {
    return this.post(`${this.environment.auth}login`, data)
      .pipe(
        map(res => {
          const authModel = res.result as AuthApi;

          this.setStorageToken(authModel.token);
          this.setStorageLogin(data.userName, data.password);

          return this.getModel()
        })
      );
  }

  /**
   * Cierra la sesión actual.
   */
  public logout() {
    this.setModel();

    this.setStorageToken();
    this.setStorageLogin();
  }

  /**
   * Obtiene el usuario actualmente autenticado.
   * @returns El usuario actualmente autenticado.
   */
  getCurrentUser() {
    return this.currentUser;
  }

  /**
   * Obtiene el modelo de usuario actualmente autenticado.
   * Si no hay un usuario autenticado, intenta realizar el inicio de sesión automáticamente.
   * @returns Un observable que emite el modelo de usuario actualmente autenticado.
   */
  getModel() {
    if (!this.currentUser) {
      const params = this.getStorageLogin();

      if (params) {
        return this.login(JSON.parse(params));
      }
    }

    return of(this.currentUser);
  }

  private setModel(model: User = null) {
    this.currentUser = model;
  }

  private setStorageToken(token: string = null) {
    const ste = localStorage;
    token ? ste.setItem('access_token', token) : ste.removeItem('access_token');
  }

  private setStorageLogin(userName: string = null, password: string = null) {
    const ste = localStorage;
    const params = { userName: userName, password: password };

    params ? ste.setItem('params', JSON.stringify(params)) : ste.removeItem('params');
  }

  private getStorageLogin() {
    return localStorage.getItem('params');
  }
}
