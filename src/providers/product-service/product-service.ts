import { HttpClientModule, HttpParams, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { GlobalProductProvider } from '../../providers/global-product/global-product';
/*
  Generated class for the CategoryServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ProductServiceProvider {

  
  apiUrl = 'http://localhost:51199/api/';
  
  constructor(public http: HttpClient, private product:GlobalProductProvider) {
    
  }

  getHome(){
    return this.http.get(this.apiUrl+'productos/HomeApp');
  }

  getProductByUser(idUsuario:string){
    return this.http.get(this.apiUrl+'productos/ProductsByUser/'+idUsuario);
  }

  postProduct(product:GlobalProductProvider){
    product.Id="0";
    console.log(product);
    return this.http.post(this.apiUrl+'Productos/', product);
  }

}
