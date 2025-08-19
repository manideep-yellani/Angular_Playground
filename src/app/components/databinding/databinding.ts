import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
@Component({
  selector: 'databinding',
  imports: [FormsModule],
  templateUrl: './databinding.html',
  styleUrl: './databinding.css'
})


export class Databinding {
  myName: string ="Maximus";
  imgUrl: string="https://images.pexels.com/photos/56866/garden-rose-red-pink-56866.jpeg";
  flag:boolean=false;

  addToCart(){
    
    alert("added the item bro")
  }

  paraDisplay=""
  paraFlag:boolean=true;
  togglePara(){
    console.log(this.paraDisplay,this.paraFlag)
    if (this.paraFlag){
      this.paraDisplay="none"
    }
    else{
      this.paraDisplay=""
    }
    this.paraFlag=!this.paraFlag
    
  }


  count:number=0;
  handleCounter(param:number){
    if(param==0)this.count=0;
    if(param==1)this.count++;
    if(param==-1)this.count--;
  }

  Inputtype:string='text'
  isText:boolean=true;
  handleInputType(){
    if(this.isText)this.Inputtype='password';
    else this.Inputtype='text';
    this.isText=!this.isText;
  }


  remainingChars:number=10;
  handleRemainingChars(){
    this.remainingChars--;
  }
  

  state:string=''
}
