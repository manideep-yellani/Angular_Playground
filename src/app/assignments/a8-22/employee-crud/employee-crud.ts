import { Component } from '@angular/core';
import data from './data'
import { EmployeeTable } from "../employee-table/employee-table";
import { EmployeeAdd } from "../employee-add/employee-add";

@Component({
  selector: 'app-employee-crud-props',
  imports: [EmployeeTable, EmployeeAdd],
  templateUrl: './employee-crud.html',
  styleUrl: './employee-crud.css'
})
export class EmployeeCrud {

actualEmployees=data
employees=data
deleteFn(i:number){
this.employees.splice(i,1)
}

addEmployeeFromChild(employee: {
    name: string;
    company_name: string;
    phone: string;
    username: string;
    email: string;
    website: string;
  })
{
  let temp=structuredClone(data[0])
  temp.name=employee.name
  temp.company.name=employee.company_name
  temp.email=employee.email
  temp.phone=temp.phone
  temp.username=employee.username
  temp.website=employee.website
  temp.id=this.actualEmployees.length+1
this.employees.push(
  temp
)
}
}
