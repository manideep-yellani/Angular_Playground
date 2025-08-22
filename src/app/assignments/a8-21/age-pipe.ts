import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'age'
})
export class AgePipe implements PipeTransform {

transform(d:string): string {
  if(d==="")return ''
  let dd=new Date(d);
  const now = new Date();
  if(d===null)return "No valid date yet";
  let age = now.getFullYear() - dd.getFullYear();
  const m = now.getMonth() - dd.getMonth();
  
  return age < 0 ? '0 years old' : `${age} years old`;
}

}
