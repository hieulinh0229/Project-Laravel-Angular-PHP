import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'booleanConvert'
})
export class BooleanPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return value == 0 ? false : true;
  }

}
