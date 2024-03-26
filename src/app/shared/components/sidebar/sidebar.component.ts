import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { AuthService } from 'src/app/service/auth.service';
import { NotifyService } from '../notify/notify.service';

/**
 * Componente de la barra lateral.
 */
@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
})
export class SidebarComponent implements OnChanges {
  /**
   * Evento de navegación final.
   */
  @Input() navigationEnd: NavigationEnd;

  protected links = [];

  protected flag: boolean = false;
  protected flagMobile: boolean = false;

  constructor(
    private authSrv: AuthService,
    private notiSrv: NotifyService,
    private router: Router,
  ) {}

  ngOnChanges(): void {
    this.setFlag();
  }

  /**
   * Establece el valor de la bandera.
   */
  private setFlag() {
    const linksToShow = [
      '/home',
      '/office',
    ];

    this.flag = !!linksToShow.find(link => this.navigationEnd.url.includes(link));
  }

  /**
   * Maneja el evento de la barra lateral en dispositivos móviles.
   */
  protected onSidebarMobile() {
    this.flagMobile = !this.flagMobile;
  }

  /**
   * Maneja el evento de cierre de sesión.
   */
  protected onLogout() {
    this.notiSrv.add('Sesión cerrada');
    this.router.navigate(['/auth/login']);

    this.authSrv.logout();
  }
}
