import { Component, OnInit } from '@angular/core';
import {Service1Service} from '../service1.service'
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(private list:Service1Service) { }

  ngOnInit() {
  }
  onsubmit(fname,lname,address,phone,email,password){
    //console.log(`first name:- ${fname}\n last Name :- ${lname}\n Address:- ${address}\n phone number:- ${phone}\n Email:- ${email}\npassword:- ${password}`);
    console.log('the data is ready to go to the service 1\n');
    this.list.crealist(fname,lname,address,phone,email,password).subscribe((response)=>{
      console.log(`the data returned from server`);
      console.log(response);
    })
  }
}
