import { Injectable } from '@angular/core';

import {HttpInterceptor, HttpRequest, HttpHandler} from '@angular/common/http';

import { finalize } from "rxjs/operators";
import { LoaderService } from '../../service/loader.service';
/**
 * Interceptor que muestra un loader mientras se realizan las peticiones HTTP.
 */
@Injectable({
  providedIn: 'root'
})
export class LoaderInterceptor implements HttpInterceptor  {

  constructor(private loader: LoaderService) {

  }

  /**
   * Intercepta la petición HTTP y muestra el loader antes de enviarla.
   * @param req La petición HTTP.
   * @param next El siguiente manipulador de la petición.
   * @returns Un observable que emite la respuesta de la petición y oculta el loader al finalizar.
   */
  intercept(req: HttpRequest<any>, next: HttpHandler) {
    this.loader.show()
    return next.handle(req).pipe(
      finalize(() => this.loader.hide())
    );

  }
}
