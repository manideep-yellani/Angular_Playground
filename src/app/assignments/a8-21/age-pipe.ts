import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'age'
})
export class AgePipe implements PipeTransform {

transform(d:any): string {

  d=new Date(d);
  const now = new Date();
  if(d===null)return "No valid date yet";
  let age = now.getFullYear() - d.getFullYear();
  const m = now.getMonth() - d.getMonth();
  
  return age < 0 ? '0 years old' : `${age} years old`;
}

}
