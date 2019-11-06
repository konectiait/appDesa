import { Component } from '@angular/core';
import { NavController,ToastController  } from 'ionic-angular';

import { Edit_offerPage } from '../edit_offer/edit_offer';
import { CanjesPage } from '../canjes/canjes';
@Component({
  selector: 'page-offerdetail',
  templateUrl: 'offerdetail.html'
})
export class OfferdetailPage {

  constructor(public navCtrl: NavController,public toastController: ToastController) {

  }
     
 edit_offer(){
        this.navCtrl.push(Edit_offerPage)
  } 
  SendRequest(){
    this.presentToast();
    this.navCtrl.push(CanjesPage);
  }  

  async presentToast() {
    const toast = await this.toastController.create({
      message: 'Se envió la solicitud.',
      duration: 3000
    });
    toast.present();
  }

}
