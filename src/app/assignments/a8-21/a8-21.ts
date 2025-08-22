import { Component } from '@angular/core';
import data from './data'
import { SalutationPipe } from "./salutation-pipe";
import { SearchFilterPipe } from "./searchFilter";
import { FormsModule } from '@angular/forms';
import { OrdinalPipe } from "./ordinal-pipe";
import { AgePipe } from './age-pipe';
@Component({
  selector: 'app-a8-21',
  imports: [SalutationPipe, SearchFilterPipe, FormsModule, OrdinalPipe,AgePipe],
  templateUrl: './a8-21.html',
  styleUrl: './a8-21.css'
})
export class A821 {
employees=data
keyword:string=""
ordinalInput:number|null=null;
birthDate:string=""

}
