import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-template-driven-form',
  imports: [
    FormsModule,
    CommonModule
  ],
  templateUrl: './template-driven-form.html',
  styleUrl: './template-driven-form.css'
})
export class TemplateDrivenForm {
  user = {
    "firstName": "sanjay",
    "lastName": "",
    "email": "sanjaysamantra2@gmail.com",
    "address": {
      "city": "Bangalore",
      "state": "Karnātaka",
      "pincode": "560037"
    }
  }

  submitMyForm(formDate: any) {
    console.log(formDate)
  }
}