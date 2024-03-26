import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable, catchError, map, of } from 'rxjs';
import { AuthService } from 'src/app/service/auth.service';

/**
 * El guardian de autenticación se utiliza para proteger las rutas en la aplicación y asegurarse de que solo los usuarios autenticados puedan acceder a ellas.
 */
@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(
    private authSrv: AuthService,
    private router: Router,
  ) { }

  /**
   * Determina si un usuario puede activar una ruta específica.
   * @param route - La instantánea de la ruta activada.
   * @param state - El estado de la ruta activada.
   * @returns Un observable booleano que indica si el usuario puede activar la ruta.
   */
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> {
    const currentUser = this.authSrv.getModel();

    return currentUser.pipe(
      map((user) => { return user ? true : this.redirectLogin(); }),
      catchError(() => of(this.redirectLogin()))
    );
  }

  /**
   * Redirige al usuario a la página de inicio de sesión.
   * @returns `false` para indicar que el usuario no puede activar la ruta.
   */
  private redirectLogin(): boolean {
    this.router.navigate(['auth/login']);
    return false;
  }
}
