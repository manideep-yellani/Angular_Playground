import { Component, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-employee-add',
  imports: [],
  templateUrl: './employee-add.html',
  styleUrl: './employee-add.css',
  outputs:['addEvent']
})
export class EmployeeAdd {

addEvent=new EventEmitter()
  addEmp(
    employeeName: HTMLInputElement,
    employeeId: HTMLInputElement,
    username: HTMLInputElement,
    email: HTMLInputElement,
    phone: HTMLInputElement,
    website: HTMLInputElement,
    companyName: HTMLInputElement
  ) {
    
    this.addEvent.emit({
    name : employeeName.value,
    company_name : companyName.value,
    phone : phone.value,
    username : username.value,
    email : email.value,
    website : website.value
    })
  
  
  }
}

