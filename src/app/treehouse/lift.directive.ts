import { Directive, HostListener, HostBinding } from '@angular/core';

@Directive({
    selector: '[lift]'
 })
export class LiftDirective {

      @HostListener('mouseenter') mouseover(eventData: Event){

        this.top = '-50px';
    }


    @HostListener('mouseleave') mouseleave(eventData: Event){


        this.top = '0px';
    }


    @HostBinding('style.top') top: string = '0';
}
