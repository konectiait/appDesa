import { Component } from '@angular/core';
import { NavController,ToastController } from 'ionic-angular';

import { TabsPage } from '../tabs/tabs';
import { RegisterPage } from '../register/register';
import { PasswordPage } from '../password/password';
import { AutenticationServiceProvider } from '../../providers/autentication-service/autentication-service';
import { GlobalProvider } from "../../providers/global/global";
import { UserServiceProvider } from '../../providers/user-service/user-service';

@Component({
  selector: 'page-signin',
  templateUrl: 'signin.html'
})
export class SigninPage {
        constructor(public navCtrl: NavController, public authService:AutenticationServiceProvider,public toastController: ToastController, public userService: UserServiceProvider, private user:GlobalProvider) {
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
      console.log("El mail es: "+this.user.Mail);
      console.log("El pass es: "+this.user.password);
      
      this.authService.loginUser( this.user.Mail, this.user.password)
      .then(info=>{
        console.log('Usuario conectado');
        this.user.Token = info.user.uid;
        this.getUserByToken();
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

    getUserByToken() {    
      this.userService.getUserByToken(this.user.Token)        
      .subscribe(
          (data)=> {
            this.presentToast('OK');
            console.log(data);
            console.log("Usuario Id: "+ data);
          },
          (error)=>{console.log(error);}
      )        
    }

}
