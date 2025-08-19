import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'table-card',
  imports: [FormsModule,
    CommonModule
  ],
  templateUrl: './table-card.html',
  styleUrl: './table-card.css'
})


export class TableCard {
employees = [
  { id: 1, name: 'John', role: 'Manager', salary: 85000, status: 'Active' },
  { id: 2, name: 'Alice', role: 'Developer', salary: 45000, status: 'Active' },
  { id: 3, name: 'Bob', role: 'Tester', salary: 30000, status: 'Inactive' },
  { id: 4, name: 'Eve', role: 'HR', salary: 40000, status: 'Active' }
];

flag:boolean=true;
toggle(){this.flag=!this.flag;}
  
getStyle(employee:any){
  let c='';
let  bg='';
if(employee.salary>=70000)bg='gold'
else if(employee.salary>=40000 && employee.salary<70000)bg="silver"
else bg="black"
if(employee.salary>=50000)c='green'
else c='red'
return{  "background-color":bg,
  'color':c,
}
}


getbg(employee: any) {
  let bg = "";
  if (employee.role === "Manager") bg = "lightyellow";
  else if (employee.role === "Developer") bg = "lightblue";
  else  if(employee.role=="Tester")bg = "lightpink";
  
  return {
    "background-color": bg,
  };
}

}
