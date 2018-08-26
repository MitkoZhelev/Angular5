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
 public PrintOne (first) {
   this.number1 = first;
 }
 public PrintSecond(second){
   this.number2 = second;
 }
 public Add () {
   console.log(this.number2 + this.number2);
 }

}
