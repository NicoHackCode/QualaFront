import { environment } from 'src/environments/environment';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable, catchError, map, of, tap } from 'rxjs';
import { ResultApi } from '../shared/interfaces/result-api';

/**
 * Clase abstracta que proporciona métodos comunes para realizar peticiones HTTP.
 */
@Injectable({
  providedIn: 'root'
})
export abstract class BaseService {

  protected environment = environment;
  protected http = inject(HttpClient);

  /**
   * Realiza una petición HTTP POST.
   * @param url La URL a la que se realizará la petición.
   * @param body El cuerpo de la petición.
   * @returns Un Observable que emite la respuesta de la petición.
   */
  protected post(url: string, body: any) {
    const headers = this.getHeader();
    const obs = this.http.post<any>(`${url}`, body, { headers });

    return this.fetchData(obs);
  }

  /**
   * Realiza una petición HTTP PUT.
   * @param url La URL a la que se realizará la petición.
   * @param body El cuerpo de la petición.
   * @returns Un Observable que emite la respuesta de la petición.
   */
  protected put(url: string, body: any) {
    const headers = this.getHeader();
    const obs = this.http.put<any>(`${url}`, body, { headers });

    return this.fetchData(obs);
  }

  /**
   * Realiza una petición HTTP GET.
   * @param url La URL a la que se realizará la petición.
   * @param params Los parámetros de la petición.
   * @returns Un Observable que emite la respuesta de la petición.
   */
  protected get(url: string, params: any = {}) {
    const headers = this.getHeader();
    const obs = this.http.get<any>(`${url}`, { headers, params });

    return this.fetchData(obs);
  }
  
  /**
   * Realiza una petición HTTP DELETE.
   * @param url La URL a la que se realizará la petición.
   * @returns Un Observable que emite la respuesta de la petición.
   */
  protected delete(url: string) {
    const headers = this.getHeader();
    const obs = this.http.delete<any>(`${url}`, { headers });

    return this.fetchData(obs);
  }

  /**
   * Realiza una petición HTTP POST para descargar un archivo.
   * @param url La URL a la que se realizará la petición.
   * @param body El cuerpo de la petición.
   * @returns Un Observable que emite el archivo descargado como un objeto Blob.
   */
  protected file(url: string, body: any = {}): Observable<Blob> {
    const headers = this.getHeader();
    const responseType: 'blob' = 'blob';

    return this.http.post(`${url}`, body, { headers, responseType });
  }

  private fetchData(obs: Observable<ResultApi>) {
    return obs.pipe(
      map((res) => {
        return res;
      }),
      catchError((err: HttpErrorResponse) => {
        return of(err);
      }),
      tap((res: ResultApi) => {
        if (!res.isSuccess) { throw new Error(res.message); }
      })
    );
  }
  
  private getHeader(): HttpHeaders {
    let token = this.getToken();

    if(token) {
      token = "Bearer " + token;
    }

    return this.createHeaders(token || '');
  }
  
  private getToken(): string | null {
    return localStorage.getItem('access_token');
  }
  
  private createHeaders(token: string): HttpHeaders {
    return new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `${token}`,
    });
  }

}
