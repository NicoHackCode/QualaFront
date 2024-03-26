import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

/**
 * Configuración de las rutas de la aplicación.
 *
 * @description Este módulo define las rutas principales de la aplicación.
 * Las rutas se definen utilizando el objeto `Routes` de Angular.
 * Cada ruta está asociada a un componente o módulo específico que se carga de forma lazy.
 * Si la ruta está vacía, se redirige a la página de inicio.
 * Las rutas disponibles son:
 * - `home`: Carga el módulo `HomeModule` cuando se accede a la ruta '/home'.
 * - `auth`: Carga el módulo `AuthModule` cuando se accede a la ruta '/auth'.
 * - `office`: Carga el módulo `OfficeModule` cuando se accede a la ruta '/office'.
 * - `forbbiden`: Carga el módulo `ForbbidenModule` cuando se accede a la ruta '/forbbiden'.
 * - `page-not-found`: Carga el módulo `NotFoundModule` cuando se accede a la ruta '/page-not-found'.
 */
/**
 * Configuración de las rutas de la aplicación.
 */
const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'home' },

  { path: 'home', loadChildren: () => import('./modules/home/home.module').then(m => m.HomeModule) },
  { path: 'auth', loadChildren: () => import('./modules/auth/auth.module').then(m => m.AuthModule) },

  { path: 'office', loadChildren: () => import('./modules/office/office.module').then(m => m.OfficeModule) },


  { path: 'forbbiden', loadChildren: () => import('./modules/error/forbbiden/forbbiden.module').then(m => m.ForbbidenModule) },
  { path: 'page-not-found', loadChildren: () => import('./modules/error/not-found/not-found.module').then(m => m.NotFoundModule) },

  { path: '**', redirectTo: 'page-not-found' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
