import { Component, OnInit } from '@angular/core';
import {Service1Service} from '../service1.service'
import { stringify } from 'querystring';
@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  constructor(private user:Service1Service) { }

  ngOnInit() {
  }
  verifyuser(username:string,password:string){
    this.user.verify(username,password).subscribe((response)=>{
      console.log("the data returned from the svrver: ")
      console.log(response);
    })
  }

}
