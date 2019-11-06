import { Component } from '@angular/core';
import { NavController, ModalController} from 'ionic-angular';

 import { StorePage } from '../store/store';
 import { EventdetailPage } from '../eventdetail/eventdetail';
 import { OfferdetailPage } from '../offerdetail/offerdetail';
 import { SearchPage } from '../search/search';
 import { MapPage } from '../map/map';
 import { Edit_eventPage } from '../edit_event/edit_event';
 import { NewCanjePage } from '../new-canje/new-canje';
 import { MatchPage } from '../match/match';


@Component({
  selector: 'page-canjes',
  templateUrl: 'canjes.html',
})
export class CanjesPage {

  near: string = "Ofrecidos";
  constructor(public navCtrl: NavController, public modalCtrl: ModalController) {

  }
  NuevoCanje(){
    this.navCtrl.push(NewCanjePage)
  }  
 
 store(){
        this.navCtrl.push(StorePage)
  } 
  offerdetail(){
        this.navCtrl.push(OfferdetailPage)
  }
  eventdetail(){
        this.navCtrl.push(EventdetailPage)
  }
  map(){
        this.navCtrl.push(MapPage)
  }
 search() {
    let modal = this.modalCtrl.create(SearchPage);
    modal.present();
  } 
  edit_event(){
    this.navCtrl.push(Edit_eventPage)
  }
  ViewMatch(){
    this.navCtrl.push(MatchPage)
  }
  
}
