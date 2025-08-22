import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'ordinal'
})
export class OrdinalPipe implements PipeTransform {

  transform(n: number|null) {
    if(n===null)return ''

    const last = n % 10;
    const tens = Math.floor(n / 10) % 10;

    if (tens === 1) {
      return n + 'th';
    }

    switch (last) {
      case 1:
        return n + 'st';
      case 2:
        return n + 'nd';
      case 3:
        return n + 'rd';
      default:
        return n + 'th';
    }
  }

}
