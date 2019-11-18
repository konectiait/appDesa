import { HttpClientModule, HttpParams, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { GlobalProvider } from "../../providers/global/global";
/*
  Generated class for the CategoryServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class UserServiceProvider {

  constructor(public http: HttpClient, private user:GlobalProvider) {
    
  }

  postUser(user:GlobalProvider) {
    user.Id="0";
    console.log(user);
    return this.http.post(this.user.ApiUrl+'Usuarios/', user);
  }

  getUserByToken(token:string){
    //return this.http.get(this.user.ApiUrl+'Usuarios/GetUsuarioByToken?Token='+token);
    return this.http.get(this.user.ApiUrl+'Usuarios/GetUsuarioByToken/'+token);
  }

}
