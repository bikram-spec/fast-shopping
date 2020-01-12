import { Injectable } from '@angular/core';
import {Service2Service} from '../app/service2.service'
@Injectable({
  providedIn: 'root',
})
export class Service1Service {

  constructor(private webrequest:Service2Service) { }
  crealist(fname:string,lname:string,address:string,phone:string,email:string,password:string){
    console.log('data reached service 1\n');
    return this.webrequest.post('signup',{fname,lname,address,phone,email,password});
  }
  //
  verify(username:string,password:string){
    return this.webrequest.post('signin',{username,password})
  }
}
