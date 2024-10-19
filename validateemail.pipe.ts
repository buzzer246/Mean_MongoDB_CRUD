import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'validateemail'
})
export class ValidateemailPipe implements PipeTransform {

  transform(value: string, ...args: string[]): any {
    var epattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (value !=""){
      if (!epattern.test(value)){
        return "invalid email!";
      } 
    }
  }
}

