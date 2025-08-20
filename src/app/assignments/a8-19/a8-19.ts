import { Component } from '@angular/core';
import data from "./data.js";
import { faStar } from '@fortawesome/free-solid-svg-icons/faStar';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faStarHalf } from '@fortawesome/free-solid-svg-icons';
import { FormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';

@Component({
  selector: 'app-a8-19',
  imports: [FontAwesomeModule,FormsModule,NgxPaginationModule],
  templateUrl: './a8-19.html',
  styleUrl: './a8-19.css'
})
export class A819 {

  p:any=1;
data=data;

prods=data.map((prod)=>{
let num=prod.rating.rate;
num=Math.round((num*2))/2
let flag=num%1===0.5;
num=Math.floor(num)
return{
  ...prod,num,flag
}
})

Array=Array
star=faStar
half=faStarHalf

searchVal=""
filterdProds=this.prods
finalProds=this.prods
getSearchVal(){
  let search=this.searchVal  
  this.filterdProds=this.prods.filter((prod)=>{
    return prod.title.toLowerCase().includes(search.toLowerCase())
  })
  this.priceSort()
}


sortOption="noSort"
priceSort(){
  if( this.sortOption==="noSort")this.finalProds=this.filterdProds
else if(this.sortOption==="asc")this.finalProds=[...this.filterdProds].sort((a,b)=>a.price-b.price)
  else this.finalProds=[...this.filterdProds].sort((b,a)=>a.price-b.price)
}

}
