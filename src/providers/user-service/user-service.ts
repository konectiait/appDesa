import { HttpClientModule, HttpParams, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../../pages/register/register';
/*
  Generated class for the CategoryServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class UserServiceProvider {

  
  apiUrl = 'http://localhost:51199/api/';
  
  constructor(public http: HttpClient) {
    
  }

  postUser(user:User) {
    return this.http.post(this.apiUrl+'Usuarios/', user);
  }

}
