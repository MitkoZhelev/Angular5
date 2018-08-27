import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-app';
 number1 :number;
 number2 : number;
 result : number;
 public PrintOne (first) {
   this.number1 = first;
 }
 public PrintSecond(second){
   this.number2 = second;
 }
 public Add () : number {
  
   this.result = +this.number1 +  +this.number2;
   console.log(this.result);
   return this.result;
 }
 public Substract (): number {
  this.result = +this.number1 - +this.number2;
  return this.result;
 }
 public Multiply() : number {
   this.result = +this.number1 * +this.number2;
   console.log(this.result);
   return this.result;
   
 }
 public Divide() : number {
   if(this.number1 >0 && this.number2 > 0)
   {
     this.result = +this.number1 * +this.number2 ;
     return this.result ;
   }else (console.log("Cannot put negative in division");)
 }

}
