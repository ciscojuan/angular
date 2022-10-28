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
    console.log('linea 22'+ params)

    let headers = new HttpHeaders({'Content-Type':'application/json'})

    console.log('Parametros: '+ headers);

    return this.http.post(this.url+'save',params,{headers : headers})

  }
}

