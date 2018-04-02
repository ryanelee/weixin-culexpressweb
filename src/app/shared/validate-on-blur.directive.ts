import { Component, OnInit, Directive, Input, HostListener } from '@angular/core';
import { NgControl } from '@angular/forms';

@Directive({
  selector: '[appValidateOnBlur]'
})
export class ValidateOnBlurDirective {
    constructor(public formControl: NgControl) { }
    @HostListener('focus', ['$event.target'])
      onFocus(target) {
        // console.log('Focus called');
        this.formControl.control.markAsUntouched();
      }
    @HostListener('blur', ['$event.target'])
    onBlur(target) {
      // console.log('Focus out called');
      this.formControl.control.markAsTouched();
    }

}
