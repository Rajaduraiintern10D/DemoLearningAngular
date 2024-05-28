import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appApphighlight]'
})
export class ApphighlightDirective {

  constructor(private el:ElementRef) { }

  @HostListener('mouseenter') onMouseEnter(){
    this.highlight('yellow');
  }
  @HostListener('mouseleave') onMouseLeave(){
    this.highlight(null);
  }
  private highlight(color : string | null){
    this.el.nativeElement.style.backgroundColor=color;
  }

}
