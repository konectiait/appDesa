import { Component } from '@angular/core';
import { NavController,ToastController } from 'ionic-angular';
import { AutenticationServiceProvider } from '../../providers/autentication-service/autentication-service';
import { UserServiceProvider } from '../../providers/user-service/user-service';

import { TabsPage } from '../tabs/tabs';

export class User {
  Mail: string;
  password: string;
  Nombre: string;
  Telefono: string;
  Token: string;
}


@Component({
  selector: 'page-register',
  templateUrl: 'register.html'
})


export class RegisterPage {
  public user:User = new User();
  constructor(public navCtrl: NavController, public authService:AutenticationServiceProvider,public toastController: ToastController, public userService: UserServiceProvider) {
  }

tabs(){
        this.navCtrl.setRoot(TabsPage)
  }

 RegistrarUsuario(){
    let tokenFb ="";
    console.log("El mail es: "+this.user.Mail);
    console.log("El pass es: "+this.user.password);
    console.log("El usuarios es: "+this.user.Nombre);
    console.log("El Telefono es: "+this.user.Telefono);
   
    this.authService.registerUser( this.user.Mail, this.user.password)
    .then(info=>{
      console.log('usuario registrado');
      this.presentToast('Registrado correctamente');
      tokenFb =info.user.uid;
      this.user.Token = tokenFb;
      this.registerToDB();
      this.navCtrl.setRoot(TabsPage,{tokenU:tokenFb});
    })
    .catch(error=>{
          this.presentToast(error);
          console.log("ERror......");
    });   
  }

  registerToDB() {    
    this.userService.postUser(this.user)        
    .subscribe(
        (data)=> {
          this.presentToast('OK');
          console.log(data);
          console.log("Usuario Id: "+ data);
        },
        (error)=>{console.log(error);}
    )        
  }

  async presentToast(texto) {
    const toast = await this.toastController.create({
      message: texto,
      duration: 3000
    });
    toast.present();
  }
}
