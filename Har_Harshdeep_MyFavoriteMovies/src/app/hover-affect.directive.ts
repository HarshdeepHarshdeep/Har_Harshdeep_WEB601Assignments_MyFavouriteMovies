import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appHoverAffect]'
})
export class HoverAffectDirective {
  @Input('appHoverAffect') style: string = '';
  constructor(private elm: ElementRef) { }

  @HostListener('mouseenter') onMouseEnter()  {
    if(this.style === 'bold'){
      this.elm.nativeElement.style.fontWeight = this.style;
    } else {
      this.elm.nativeElement.style.textDecoration = 'underline';
    }
  }

  @HostListener('mouseleave') onMouseLeave()  {
    this.elm.nativeElement.style.textDecoration = 'none';
    this.elm.nativeElement.style.fontWeight = 'normal';
}


}
