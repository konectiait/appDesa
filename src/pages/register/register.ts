import { Component } from '@angular/core';
import { NavController,ToastController } from 'ionic-angular';
import { AutenticationServiceProvider } from '../../providers/autentication-service/autentication-service';
import { UserServiceProvider } from '../../providers/user-service/user-service';
import { GlobalProvider } from "../../providers/global/global";
import { TabsPage } from '../tabs/tabs';

@Component({
  selector: 'page-register',
  templateUrl: 'register.html'
})


export class RegisterPage {
  constructor(public navCtrl: NavController, public authService:AutenticationServiceProvider,public toastController: ToastController, public userService: UserServiceProvider, private user:GlobalProvider) {
 }

tabs(){
        this.navCtrl.setRoot(TabsPage)
  }

 RegistrarUsuario(){
    let tokenFb ="";  
    this.authService.registerUser( this.user.Mail, this.user.password)
    .then(info=>{
      console.log('usuario registrado');
      this.presentToast('Registrado correctamente');
      tokenFb =info.user.uid;
      this.user.Token = tokenFb;
      this.user.Imagen = "";
      this.user.IdPlan = "1";//Se registra con plan básico por default.
      console.log('Token ' + tokenFb);
      this.registerToDB();
      this.navCtrl.setRoot(TabsPage,{tokenU:tokenFb});
    })
    .catch(error=>{
          this.presentToast(error);
          console.log("ERror......");
    });   
  }

  getUserByToken(token:string){

  }

  registerToDB() {    
    this.userService.postUser(this.user)        
    .subscribe(
        (data)=> {
          this.presentToast('OK');
          console.log(data);
          console.log("Usuario Id: "+ data);
        },
        (error)=>{console.log("ERROR en Save to DB: " + error);}
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
