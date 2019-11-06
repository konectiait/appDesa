import { Component,ViewChild  } from '@angular/core';
import { NavController, Slides,ToastController } from 'ionic-angular';
import { NewchattingPage } from '../newchatting/newchatting';
import { TabsPage } from '../tabs/tabs';
//import { HomePage } from '../home/home';


@Component({
  selector: 'page-match',
  templateUrl: 'match.html',
})
export class MatchPage {
  @ViewChild(Slides) slides: Slides;

  gender: string = "female";
  constructor(public navCtrl: NavController,public toastController: ToastController) {

  }

   tabs(){
        this.navCtrl.setRoot(TabsPage)
  }
  goToSlide() {
    this.slides.slideTo(2, 500);
  }
  AceptaMatch(){
    this.presentToast('La solicitud se aceptó');
    this.navCtrl.push(NewchattingPage)
  }
  RechazaMatch(){
    //this.navCtrl.push(HomePage)
    this.presentToast('La solicitud fue rechazada');
    this.navCtrl.pop()
  }
 
  async presentToast(texto) {
    const toast = await this.toastController.create({
      message: texto,
      duration: 3000
    });
    toast.present();
  }
  
}
