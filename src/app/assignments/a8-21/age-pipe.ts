import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'age'
})
export class AgePipe implements PipeTransform {

transform(d:string): string {
  if(d==="")return ''

  let dd=new Date(d);
  const now = new Date();

  let age = now.getFullYear() - dd.getFullYear();
  let m = dd.getMonth()-now.getMonth()  ;
  if(m<0){m=-m;age--}
  
  return age < 0 ? '0 years old' : `${age} years ${m}months old`;
}

}
