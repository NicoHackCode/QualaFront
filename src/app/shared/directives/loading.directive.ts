import { Directive, ElementRef, Renderer2 } from '@angular/core';

/**
 * Directiva para mostrar un indicador de carga en un elemento HTML.
 */
@Directive({
  selector: '[loading]',
})
export class LoadingDirective {
  constructor(private el: ElementRef, private renderer: Renderer2) {
    const html = `
      <div class="inline-block h-20 w-20 animate-spin rounded-full border-4 border-solid border-primary border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]" role="status">
        <span class="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]"></span>
      </div>
    `;

    this.renderer.setProperty(this.el.nativeElement, 'innerHTML', html);
  }
}
