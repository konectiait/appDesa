import { Component } from '@angular/core';
import { NavController,ToastController } from 'ionic-angular';
import { AutenticationServiceProvider } from '../../providers/autentication-service/autentication-service';

import { TabsPage } from '../tabs/tabs';

export class User {
  email: string;
  password: string;
  username: string;
}


@Component({
  selector: 'page-register',
  templateUrl: 'register.html'
})


export class RegisterPage {
  public user:User = new User();
  constructor(public navCtrl: NavController, public authService:AutenticationServiceProvider,public toastController: ToastController) {

  }

tabs(){
        this.navCtrl.setRoot(TabsPage)
  }

 RegistrarUsuario(){
    let token ="";
    console.log("El mail es: "+this.user.email);
    console.log("El pass es: "+this.user.password);
    console.log("El usuarios es: "+this.user.username);
   
    this.authService.registerUser( this.user.email, this.user.password)
    .then(info=>{
      console.log('usuario registrador');
      this.presentToast('EL usuario se registró correctamente');
      token =info.user.uid;
      this.navCtrl.setRoot(TabsPage,{tokenU:token});
    })
    .catch(error=>{
          this.presentToast('Usuario o clave incorrecto');
          console.log("Errorororor......");
    });   
  }
  async presentToast(texto) {
    const toast = await this.toastController.create({
      message: texto,
      duration: 3000
    });
    toast.present();
  }
}
