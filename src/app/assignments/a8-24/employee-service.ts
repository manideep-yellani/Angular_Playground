import { Injectable } from '@angular/core';
import data from './employee-data.json'
@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  
  dataObj:any;
  employees=data.employees;

  getAllEmployees(){
    return this.employees;
  }
  getMaleEmployees(){
    return this.employees.filter((employee)=>employee.gender==='male'?true:false)
  }
  getFemaleEmployees(){
    return this.employees.filter((employee)=>employee.gender==='female'?true:false)
  }
}
