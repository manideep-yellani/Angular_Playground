import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchFilter',
})
export class SearchFilterPipe implements PipeTransform {
  transform(
    value: {
      id: number;
      name: string;
      designation: string;
      department: string;
      salary: number;
      email: string;
      gender: string;
    }[],
    keyword:string
  ): any[] {
    
    return value.filter((emp) => {
      return (emp.name.toLowerCase().includes(keyword.toLowerCase())||
      emp.department.toLowerCase().includes(keyword.toLowerCase())||
      emp.gender.toLowerCase().includes(keyword.toLowerCase())||
      emp.designation.toLowerCase().includes(keyword.toLowerCase()))
    });
    return [];
  }
}
