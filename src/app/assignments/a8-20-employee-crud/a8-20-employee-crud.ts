import { Component } from '@angular/core';
import employees from './data'


@Component({
  selector: 'app-employee-crud',
  imports: [],
  templateUrl: './a8-20-employee-crud.html',
  styleUrl: './a8-20-employee-crud.css'
})


export class A820EmployeeCrud {
  data=employees
employees=employees

delEmployee(index:any){
  console.log(index,typeof index)
this.employees=this.employees.filter((employee,i)=>{
return i===index?false:true
})
}

}
