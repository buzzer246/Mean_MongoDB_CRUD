import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'stringlength'
})
export class StringlengthPipe implements PipeTransform {

  transform(value: any, ...args: any[]):any{
    return value.length;
  }

}
