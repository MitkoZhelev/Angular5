
import {Component} from '@angular/core';
import { THROW_IF_NOT_FOUND } from '@angular/core/src/di/injector';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-app';
  number1 : string = "";
  number2 : string = "";
  flagSecond : boolean = false;
  result : number;
  flagAdd : boolean = false;
  flagSubtract: boolean = false;
  flagDivide:boolean = false;
  flagMultiply:boolean = false;

 public One() {
   let one = 1;
   if(!this.flagSecond)
   {
    this.number1  = this.number1 + "1"; 
 }else {
   this.number2 = this.number2 +"1";
 }
   }
   
 public Two() {
   if(!this.flagSecond){
     this.number1 = this.number1 + "2";
   }else {this.number2 = this.number2 + "2";}
 }
 public Three() {
   if(!this.flagSecond){
     this.number1 =this.number1 + "3";
   } else { this.number2 = this.number2 + "3";}
 }
 public Four () {
   if(!this.flagSecond){
     this.number1 = this.number1 +  "4";
   }else{this.number2 = this.number2 + "4";}
 }
 public Five() {
   if(!this.flagSecond){
     this.number1 = this.number1 + "5";
   }else{this.number2 = this.number2 + "5";}
 }
 public Six() { 
   if(!this.flagSecond){
     this.number1 = this.number1 + "6";
   }else{this.number2 = this.number2 + "6";}
 }
 public Seven() {
   if(!this.flagSecond){
     this.number1 = this.number1 + "7";
   }else{this.number2 = this.number2 + "7";}
 }
 public Eight() {
   if(!this.flagSecond){
     this.number1 = this.number1 + "8";
   }else{this.number2 = this.number2 + "8" ;}
 }
 public Nine(){
   if(!this.flagSecond){
     this.number1 =this.number1 + "9" ;
   }else{this.number2= this.number2 + "9" ;}
 }
 public Zero() { 
   if(!this.flagSecond){
     this.number1 = this.number1 + "0" ;
   }else{this.number2 = this.number2 + "0";}
 }
 public Dot() {
   if(!this.flagSecond){
     this.number1 = this.number1 + "."; 
   }else{this.number2 = this.number2 + ".";}
 }
 
 
 public Print () {
   this.result = parseInt(this.number1) ;
   console.log(this.result);
 }
public Add(){
  this.flagSecond = true;
  this.flagAdd = true;
}
public Multiply() {
  this.flagSecond = true;
  this.flagMultiply = true;
}
public Divide() {
  this.flagSecond = true;
  this.flagDivide = true;
}
public Subtract() { 
  this.flagSecond = true;
  this.flagSubtract = true;
}
public RealAdd() {
  if(this.flagAdd == true)
  {
    this.result = parseInt(this.number1) + parseInt(this.number2);
    console.log(this.result);
  }
}
public RealSubtract() {
  if(this.flagSubtract == true){
    this.result = parseInt(this.number1) - parseInt(this.number2);
    console.log(this.result);
  }
}
public RealMultiply(){
  if(this.flagMultiply == true){
    this.result = parseInt(this.number1) * parseInt(this.number2);
    console.log(this.result);
  }
}
public RealDivide() {
  if(parseInt(this.number1) != 0 && parseInt(this.number2) !=0){
    if(this.flagDivide == true){
      this.result = parseInt(this.number1) / parseInt(this.number2);
    console.log(this.result);
    }
  }
}
// public Clear(){
//   this.number1 = "";
//   this.number2 = "";
// }
}

