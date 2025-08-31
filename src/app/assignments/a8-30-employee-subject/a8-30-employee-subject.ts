import { Component } from '@angular/core';
import { EmpSubService } from './emp-sub-service';

@Component({
  selector: 'app-a8-30-employee-subject',
  imports: [],
  templateUrl: './a8-30-employee-subject.html',
  styleUrl: './a8-30-employee-subject.css'
})
export class A830EmployeeSubject {

  constructor(private empService:EmpSubService){

  }


  empArr:any[]=[]
  ngOnInit(){
      this.empService.empObservable.subscribe(emp=>{this.empArr=emp;console.log(emp,"hiiiii")})
  }
}
