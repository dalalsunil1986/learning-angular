import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  isButtonDisabled:boolean
  testMessage:string

  constructor(){
    this.isButtonDisabled = true

    setTimeout(()=>{
      this.isButtonDisabled = false
    },2000)
  }


  changeTestMessage(){
    this.testMessage = "This is test message"
  }

  printName(){

  }
}
