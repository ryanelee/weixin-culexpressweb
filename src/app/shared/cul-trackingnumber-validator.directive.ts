import { Directive, Input, OnChanges, SimpleChanges } from '@angular/core';
import { AbstractControl, NG_VALIDATORS, Validator, ValidatorFn, Validators } from '@angular/forms';

import { CommonApiService } from 'app/core/service/common-api.service'

export function trackingNumberFormatValidator(validRegx: RegExp): ValidatorFn {
  return (control: AbstractControl): {[key: string]: any} => {
    if (!control.dirty) {
      return null;
    }

    const result = validRegx.test(control.value);
    return result ? null : {'format': true};
  }
}

@Directive({
  selector: '[appCulTrackingnumberValidator]',
  providers: [{provide: NG_VALIDATORS, useExisting: CulTrackingnumberValidatorDirective, multi: true}]
})
export class CulTrackingnumberValidatorDirective implements Validator {

  @Input() validRegx: string;

  validate(control: AbstractControl): {[key: string]: any} {
    return this.validRegx ? trackingNumberFormatValidator(new RegExp(this.validRegx, 'i'))(control)
      : null;
  }
}
