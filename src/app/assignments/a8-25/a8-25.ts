import { Component } from '@angular/core';
import { Employee } from '../../models/employee';
import { inject } from '@angular/core';
import { Crud } from './crud-service';
import { FormsModule } from '@angular/forms';
import { ChangeDetectorRef } from '@angular/core';
@Component({
  selector: 'app-a8-25',
  imports: [FormsModule],
  templateUrl: './a8-25.html',
  styleUrl: './a8-25.css'
})
export class A825 {
  constructor(private cdr: ChangeDetectorRef) {}

isLoading:boolean=false;
employeesUrl:string='http://localhost:3000/employees'
data:Employee[]=[]
user=<Employee>{}
crudObj=inject(Crud)

ngOnInit(){
  this.crudObj.myUrl=this.employeesUrl;
  this.load()
}

load(){
  this.isLoading=true;
  this.crudObj.getData().subscribe({
      next:(response:Employee[])=>{
        this.data=response
        
      },
      error:(error)=>{},
      complete:()=>{this.isLoading=false;
        this.cdr.detectChanges(); 
      }  //check this if oyu get loading infinitely
    }
    );
}

onDeleteUser(userId: string) {
  this.crudObj.deleteUser(userId).subscribe({
    next: () => {
      console.log('User deleted successfully');
      this.load(); // Refresh the list
    },
    error: (error) => {
      console.error('Delete failed:', error);
    }
  });
}

  onSubmit(form: any) {
    if (form.valid) {
      console.log('Form Data:', this.user);
      
      this.crudObj.createData(this.user).subscribe({
        next: (response) => {
          console.log('User created successfully:', response);
          this.load(); // Refresh your table data
        },
        error: (error) => {
          console.error('Error creating user:', error);
        }
      });
    }
  }

  update(id:string){

  }

}
