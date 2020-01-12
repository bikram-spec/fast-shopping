import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class Service2Service {

  readonly root_url;
  constructor(private http:HttpClient) {
    this.root_url='http://localhost:3000';
  }
  get(uri:string){
    return this.http.get(`${this.root_url}/${uri}`);
  }
  post(uri:string,payload:object){
    //console.log('teh data reached service 2')
    //console.log(payload)
    return this.http.post(`${this.root_url}/${uri}`,payload);
  }
  //patch(uri:string,payload:any){
    //return this.http.patch('${root_url}/${uri}',payload)
 /// }
 //
}
