import { Component } from '@angular/core';
import employees from './data';
import { MyModal } from '../../components/my-modal/my-modal';
import Snackbar from 'awesome-snackbar';
import { faTrash } from '@fortawesome/free-solid-svg-icons/faTrash';
import { FaIconComponent } from '@fortawesome/angular-fontawesome';
import Swal from 'sweetalert2';import { ChangeDetectorRef } from '@angular/core';
import { ApplicationRef } from '@angular/core';
import { NgZone } from '@angular/core';

@Component({
  selector: 'app-employee-crud',
  imports: [MyModal, FaIconComponent],
  templateUrl: './a8-20-employee-crud.html',
  styleUrl: './a8-20-employee-crud.css',
})
export class A820EmployeeCrud {
constructor(private cdr: ChangeDetectorRef,private appRef: ApplicationRef,private ngZone: NgZone) {}

  data = employees;
  employees = employees;

  delEmployee(index: any) {
    console.log(index, typeof index);
    this.employees = this.employees.filter((employee, i) => {
      return i === index ? false : true;
    });
  }

  // This WILL update the view immediately
testAngularPromise() {
  Promise.resolve().then(() => {
    this.employees.pop();
    console.log('This should update the view');
  });
}

// This might NOT update the view
testSweetAlert() {
  Swal.fire({title: 'Test'}).then(() => {
    this.employees.pop();
    console.log('This might not update the view');
  });
}
dummyRefresh = false;
delEmployee1(index: any) {
  console.log(index, typeof index);
  Swal.fire({
    title: 'Do you want to save the changes?',
    showDenyButton: true,
    showCancelButton: true,
    confirmButtonText: 'Save',
    denyButtonText: `Don't save`,
  }).then((result) => {
    this.ngZone.run(() => {
      if (result.isConfirmed) {
        this.employees = this.employees.filter((employee, i) => i !== index);
      }
    });
    this.cdr.detectChanges()
  });
  this.dummyRefresh = !this.dummyRefresh;
}

  addEmp(
    employeeName: HTMLInputElement,
    employeeId: HTMLInputElement,
    username: HTMLInputElement,
    email: HTMLInputElement,
    phone: HTMLInputElement,
    website: HTMLInputElement,
    companyName: HTMLInputElement
  ) {
    let temp = structuredClone(this.data[0]);
    temp.name = employeeName.value;
    temp.id = this.data.length + 1;
    temp.company.name = companyName.value;
    temp.phone = phone.value;
    temp.username = username.value;
    temp.email = email.value;
    temp.website = website.value;
    employees.push(temp);
    new Snackbar('Employee added', {
      position: 'top-center',
      theme: 'light',
      timeout: 5000,
      actionText: 'X',
    });
  }

  trashCon = faTrash;
}
