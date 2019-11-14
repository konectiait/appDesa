import { HttpClientModule, HttpParams, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
/*
  Generated class for the CategoryServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ChatServiceProvider {

  
  apiUrl = 'http://localhost:51199/api/';
  
  constructor(public http: HttpClient) {
    
  }

  getChats(){
    return this.http.get(this.apiUrl+'chats');
  }

}
