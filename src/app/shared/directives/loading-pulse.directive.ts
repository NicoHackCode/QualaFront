import { Directive, ElementRef, Renderer2 } from '@angular/core';

/**
 * Directiva que muestra un efecto de carga pulsante en un elemento HTML.
 */
@Directive({
  selector: '[loadingPulse]',
})
export class LoadingPulseDirective {

  constructor(private el: ElementRef, private renderer: Renderer2) {
    const html = `
      <div class="bg-white p-5">
        <div class="overflow-hidden shadow-lg animate-pulse">
          <div class="h-48 bg-primary opacity-50 rounded"></div>

          <div class="px-6 py-4">
            <div class="h-6 bg-primary opacity-50 rounded mb-2"></div>
            <div class="h-4 bg-primary opacity-50 rounded w-2/3"></div>
          </div>

          <div class="px-6 pt-4 pb-2">
            <div class="h-4 bg-primary opacity-50 rounded w-1/4 mb-2"></div>
            <div class="h-4 bg-primary opacity-50 rounded w-1/2"></div>
          </div>
        </div>
      </div>
    `;

    this.renderer.setProperty(this.el.nativeElement, 'innerHTML', html);
  }
}
