import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'validmobile'
})
export class ValidmobilePipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {
    let mpattern = /^[0]?[6789]\d{9}$/;
    if (value !=""){
      if (!mpattern.test(value)){
        return "invalid!";
      } 
    }
  }
}
