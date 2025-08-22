import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'age'
})
export class AgePipe implements PipeTransform {

transform(d: string | Date): string {

  const birth = new Date(d);
  const now = new Date();
  
  let age = now.getFullYear() - birth.getFullYear();
  const m = now.getMonth() - birth.getMonth();
  
  return age < 0 ? '0 years old' : `${age} years old`;
}

}
