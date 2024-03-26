import { Component, OnInit } from '@angular/core';
import { Subject, filter } from 'rxjs';
import { LoaderService } from './service/loader.service';
import { NavigationEnd, Router } from '@angular/router';

/**
 * Componente principal de la aplicación.
 */
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  /**
   * Indica si se está cargando algo.
   */
  protected isLoading: Subject<boolean> = this.loader.isLoading;
  
  /**
   * Última navegación realizada.
   */
  protected navigationEnd: NavigationEnd;

  constructor(
    private loader: LoaderService,
    private router: Router
  ) { }

  ngOnInit() {
    this.onNavigation();
  }

  /**
   * Maneja los eventos de navegación del router.
   */
  private onNavigation(): void {
    this.router.events
      .pipe(filter(item => item instanceof NavigationEnd))
      .subscribe(navigation => {
        this.navigationEnd = navigation as NavigationEnd;
      });
  }
}
