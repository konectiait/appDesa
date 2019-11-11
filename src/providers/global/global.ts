import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';



/*
  Generated class for the GlobalProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class GlobalProvider {

  private user: GlobalProvider; 
    Id: string;
    Mail: string;
    password: string;
    Nombre: string;
    Telefono: string;
    Token: string;
    Direccion: string;
    Razon_Social: string;
    Estado: string;
    IdTipo: string;
    Cuit: string;
    Imagen: string;
    IdPlan: string;

    getUser(): GlobalProvider {
      return this.user;
    }
  
    setUser(user:GlobalProvider) {
      this.user = user;
    }
  }

