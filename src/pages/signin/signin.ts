import { Component } from '@angular/core';
import { NavController,ToastController } from 'ionic-angular';

import { TabsPage } from '../tabs/tabs';
import { RegisterPage } from '../register/register';
import { PasswordPage } from '../password/password';
import { AutenticationServiceProvider } from '../../providers/autentication-service/autentication-service';

export class User {
      email: string;
      password: string;
  }


@Component({
  selector: 'page-signin',
  templateUrl: 'signin.html'
})
export class SigninPage {
      public user:User = new User();

      constructor(public navCtrl: NavController, public authService:AutenticationServiceProvider,public toastController: ToastController) {

      }
  
 
 tabs(){
        this.navCtrl.setRoot(TabsPage)
  }
  register(){
        this.navCtrl.push(RegisterPage)
  } 
  password(){
        this.navCtrl.push(PasswordPage)
  }
  
   IngresarUsuario(){
      let token ="";
      console.log("El mail es: "+this.user.email);
      console.log("El pass es: "+this.user.password);
      
      this.authService.loginUser( this.user.email, this.user.password)
      .then(info=>{
        console.log('Usuario conectado');
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
