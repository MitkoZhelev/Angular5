
import {Component} from '@angular/core';
import { THROW_IF_NOT_FOUND } from '@angular/core/src/di/injector';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-app';
  number1 :number = 0;
  number2 : number = 0;
  flagSecond : boolean = false;
//  result : number;
//  public PrintOne (first) {
//    this.number1 = first;
//  }
//  public PrintSecond(second){
//    this.number2 = second;
//  }
//  public Add () : number {
  
//    this.result = +this.number1 +  +this.number2;
//    console.log(this.result);
//    return this.result;
//  }
//  public Substract (): number {
//   this.result = +this.number1 - +this.number2;
//   return this.result;
//  }
//  public Multiply() : number {
//    this.result = +this.number1 * +this.number2;
//    console.log(this.result);
//    return this.result;
   
//  }
//  public Divide() : number {
//    if(this.number1 >0 && this.number2 > 0)
//    {
//      this.result = +this.number1 * +this.number2 ;
//      return this.result ;
//    }else { console.log("Cannot put negative in division");}
//  }
 public One() {
   let one = 1;
   if(!this.flagSecond)
   {
    this.number1  = this.number1 + 1; 
 }else {
   this.number2 = one;
 }
   }
   
 public Two() {
   let two = 2;
   if(!this.flagSecond){
     this.number1 =two;
   }else {this.number2 = two;}
 }
 public Three() {
   if(!this.flagSecond){
     this.number1 = 3;
   } else { this.number2 = 3;}
 }
 public Four () {
   if(!this.flagSecond){
     this.number1 =4;
   }else{this.number2 =4;}
 }
 public Five() {
   if(!this.flagSecond){
     this.number1 = 5;
   }else{this.number2 =5;}
 }
 public Six() { 
   if(!this.flagSecond){
     this.number1 = 6;
   }else{this.number2 =6;}
 }
 public Seven() {
   if(!this.flagSecond){
     this.number1 = 7;
   }else{this.number2 = 7;}
 }
 public Eight() {
   if(!this.flagSecond){
     this.number1 = 8;
   }else{this.number2 = 8;}
 }
 public Nine(){
   if(!this.flagSecond){
     this.number1 =9;
   }else{this.number2=9;}
 }
 public Zero() { 
   if(!this.flagSecond){
     this.number1 = 0;
   }else{this.number2 = 0;}
 }
 public Print () {
   console.log(this.number1 + this.number2);
 }

}

