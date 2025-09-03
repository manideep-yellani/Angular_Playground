import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-model-driven-form',
  imports: [
    ReactiveFormsModule,
    CommonModule
  ],
  templateUrl: './model-driven-form.html',
  styleUrl: './model-driven-form.css'
})
export class ModelDrivenForm {
  myForm: any;
  constructor(private formBuilder: FormBuilder) {
  }
  ngOnInit() {
    // this.createMyFormUsingFormGroup();
    this.createMyFormUsingFormBuilder();
  }
  createMyFormUsingFormGroup() {
    this.myForm = new FormGroup({
      firstName: new FormControl('Sachin', [Validators.required, Validators.minLength(5)]),
      lastName: new FormControl('Tendulkar'),
      email: new FormControl(''),
      address: new FormGroup({
        city: new FormControl(''),
        state: new FormControl(''),
        pincode: new FormControl('')
      })
    }, { updateOn: 'change' });
  }
  createMyFormUsingFormBuilder() {
    this.myForm = this.formBuilder.group({
      firstName: ['Sachin', [Validators.required]],
      lastName: ['Tendulkar', [Validators.required]],
      email: ['sachin@gmail.com', [Validators.required]],
      address: this.formBuilder.group({
        city: [],
        state: [],
        pincode: []
      })
    })
  }

  submitMyForm(formData: any) {
    console.log(formData);
    console.log(formData.value);
  }
}

