import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { SigninPage } from '../signin/signin';
@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html'
})
export class ProfilePage {
 shaop_category: string = "Dairy";
  constructor(public navCtrl: NavController) {

  }

signin(){
        this.navCtrl.setRoot(SigninPage)
  }
}
