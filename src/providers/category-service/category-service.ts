import { HttpClientModule, HttpParams, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
/*
  Generated class for the CategoryServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class CategoryServiceProvider {

  
  apiUrl = 'http://mundocanje.tk/api/';
  
  constructor(public http: HttpClient) {
    //console.log('Hello CategoryServiceProvider Provider');
  }

  GetCategorias() {
    return this.http.get(this.apiUrl+'categorias/');
  }

}
