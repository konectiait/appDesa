import { HttpClientModule, HttpParams, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { GlobalProductProvider } from '../../providers/global-product/global-product';
import { GlobalProvider } from "../../providers/global/global";
/*
  Generated class for the CategoryServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ProductServiceProvider {

  constructor(public http: HttpClient, private product:GlobalProductProvider, public global:GlobalProvider) {
    
  }

  getHome(){
    return this.http.get(this.global.ApiUrl+'productos/HomeApp');
  }

  getProductByUser(idUsuario:string){
    return this.http.get(this.global.ApiUrl+'productos/ProductsByUser/'+idUsuario);
  }
  getProductByIdTipo(IdTipo:string){
    return this.http.get(this.global.ApiUrl+'productos/GetProductosByIdTipo/'+IdTipo);
  }
  

  postProduct(product:GlobalProductProvider){
    product.Id="0";
    console.log(product);
    return this.http.post(this.global.ApiUrl+'Productos/', product);
  }

}
