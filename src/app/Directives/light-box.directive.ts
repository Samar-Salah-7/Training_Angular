import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appLightBox]', //دة اللى بيتحط على أى element  علشان أستخدمه معاه أو عليه واحنا شغالين
  standalone: true,
})
export class LightBoxDirective {
  @HostListener('mouseover') mouseover() {
    this.eleRef.nativeElement.style.border = '3px solid green';
  }
  @HostListener('mouseout') mouseout() {
    this.eleRef.nativeElement.style.border = '3px solid blue';
  }
  constructor(private eleRef: ElementRef) {
    this.eleRef.nativeElement.style.border = '3px solid red';
  }
}
