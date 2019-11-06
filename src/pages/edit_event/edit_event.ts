import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { TabsPage } from '../tabs/tabs';
@Component({
  selector: 'page-edit_event',
  templateUrl: 'edit_event.html'
})
export class Edit_eventPage {
 gender: string = "female";
  constructor(public navCtrl: NavController) {

  }

tabs(){
        this.navCtrl.setRoot(TabsPage)
  }
}
