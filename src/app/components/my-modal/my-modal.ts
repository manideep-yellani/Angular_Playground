import { Component,Input } from '@angular/core';

@Component({
  selector: 'app-my-modal',
  imports: [],
  templateUrl: './my-modal.html',
  styleUrl: './my-modal.css'
})
export class MyModal {
@Input() modalId:string=''
}