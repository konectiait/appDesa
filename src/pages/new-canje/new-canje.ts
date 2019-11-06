import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { TabsPage } from '../tabs/tabs';

@Component({
  selector: 'page-new-canje',
  templateUrl: 'new-canje.html',
})
export class NewCanjePage {
  gender: string = "female";
  constructor(public navCtrl: NavController) {

  }

tabs(){
        this.navCtrl.setRoot(TabsPage)
  }
}
