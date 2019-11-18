import { HttpClientModule, HttpParams, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { GlobalProvider } from "../../providers/global/global";
/*
  Generated class for the CategoryServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ChatServiceProvider {

  
  
  
  constructor(public http: HttpClient, public global:GlobalProvider) {
    
  }

  getChats(){
    return this.http.get(this.global.ApiUrl+'chats');
  }

}
