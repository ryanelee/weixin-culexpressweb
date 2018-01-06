import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'baseCode'})
export class BaseCodePipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return null;
  }

}
