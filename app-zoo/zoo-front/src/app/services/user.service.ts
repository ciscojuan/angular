import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {map} from 'rxjs/operators';
import { Observable } from 'rxjs';
import { GLOBAL } from './global';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  public url:string;

  constructor(public http: HttpClient) {
    this.url = GLOBAL.url;
   }

  register(user:User): Observable<any>{

    let params = JSON.stringify(user);
    let headers = new HttpHeaders({'Content-Type':'application/json'})

    return this.http.post(this.url+'save',params,{headers : headers})
  }

  sigIn(userLogin:any, gettoken:any = null):Observable<any>{
    if(gettoken != null){
      userLogin.gettoken = gettoken;
    }
    let params = JSON.stringify(userLogin);
    let headers = new HttpHeaders({'Content-Type':'application/json'})

    return this.http.post(this.url+'login', params, {headers : headers})
  }
}

