import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'salutation'
})
export class SalutationPipe implements PipeTransform {

  transform(value: string, ...args: unknown[]): unknown {
    if((args[0])==="Male") return `Mr.${value}`
    return `Ms.${value}`;
  }

}
