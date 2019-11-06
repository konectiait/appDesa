import { HttpClientModule, HttpParams, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class FaqProvider {
    favoriteCounter: number = 0;
    favorites: Array<any> = [];
    
    clientes;
    cliente: any;
    apiUrl = 'http://mundocanje.tk/api/';

  constructor(public http: HttpClient) {
    //console.log('Hello FaqProvider Provider');
  }
  GetPreguntas_Frecuentes() {
    return this.http.get(this.apiUrl+'preguntas_frecuentes/');
  }

}
