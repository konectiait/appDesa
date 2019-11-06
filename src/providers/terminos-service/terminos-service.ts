import { HttpClientModule, HttpParams, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class TerminosServiceProvider {

  favoriteCounter: number = 0;
    favorites: Array<any> = [];
    
    clientes;
    cliente: any;
    apiUrl = 'http://mundocanje.tk/api/';

  constructor(public http: HttpClient) {
    //console.log('Hello TerminosServiceProvider Provider');
  }
  GetTerminos() {
    return this.http.get(this.apiUrl+'terminos/');
    }
  
  findAll() {
  //return Promise.resolve(restaurants);
  return Promise.resolve(this.GetTerminos());
  }



findByName(searchKey: string) {
let key: string = searchKey.toUpperCase();    
return Promise.resolve(this.GetDatosParams(key));

}

getFavorites() {

return Promise.resolve(this.favorites);

}

    


  obtenerDatos() {    
    return this.http.get(this.apiUrl+'terminos');
  }
  //GetDatosId(id) {
  //return this.http.get(this.apiUrl+'clientes/'+id);
  //}

GetDatosParams(searchKey: string) {
let key: string = searchKey;    
let postData2 = {
    "NombreFantasia": key,
    "Direccion": ""
}
return this.http.post(this.apiUrl+'clientes/clientesbyfiltros', postData2,{headers: {'Accept': 'application/json','Content-Type': 'application/json', }});    

}



  SendComentarios(restaurant, usuarioID, comentario, rating1, rating2,rating3,rating4) {  
    console.log("ID de comecio2:"+restaurant.Id);
    console.log("El usuaroID es :"+usuarioID);

    let postData2 = {      
        "Id": 0,
        "IdCliente": restaurant.Id,
        "IdUsuario": usuarioID,
        "FechaAlta": "",
        "Comentario": comentario,
        "rating1": rating1,
        "rating2": rating2,
        "rating3": rating3,
        "rating4": rating4
    }   
    console.log("va a mandar alto pos3");        
    return this.http.post(this.apiUrl+'Clientes_Comentarios', postData2,{headers: {'Accept': 'application/json','Content-Type': 'application/json', }});

  }

}
