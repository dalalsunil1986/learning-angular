import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-success-alert',
  templateUrl: './success-alert.component.html',
  styleUrls: ['./success-alert.component.css']
})
export class SuccessAlertComponent implements OnInit {

  message:string;

  constructor() {
    this.message = "This is success alert component"
  }

  getMessage(){
    return this.message
  }

  ngOnInit() {
  }

}
