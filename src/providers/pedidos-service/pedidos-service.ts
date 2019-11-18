import { HttpClientModule, HttpParams, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { GlobalProvider } from "../../providers/global/global";

@Injectable()
export class PedidosServiceProvider {

  constructor(public http: HttpClient, public global:GlobalProvider) {
    
  }

  getPedidosRecibidosByUser(idUsuario:string){
    return this.http.get(this.global.ApiUrl+'Pedidos/CanjesRecibidosByUsuario/'+idUsuario);
  }

}
