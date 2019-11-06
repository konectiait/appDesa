import { Component } from '@angular/core';
import { NavController, ModalController,NavParams} from 'ionic-angular';

 import { Edit_offerPage } from '../edit_offer/edit_offer';
 import { Edit_eventPage } from '../edit_event/edit_event';
 import { EventdetailPage } from '../eventdetail/eventdetail';
 import { OfferdetailPage } from '../offerdetail/offerdetail';
 import { SearchPage } from '../search/search';
 //import { ChatsPage } from '../chats/chats';
 import { MapPage } from '../map/map';
 import { CategoriesPage } from '../categories/categories';
 import {CategoryresultPage} from '../categoryresult/categoryresult';
 import { AccountPage } from '../account/account';
 import { NewCanjePage } from '../new-canje/new-canje';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  near: string = "offers";
  tokenUsuario;
  constructor(public navCtrl: NavController, public modalCtrl: ModalController,public navParams: NavParams) {
      this.tokenUsuario = this.navParams.get('tokenU');
      console.log("EL token del usuario es:"+this.tokenUsuario);
  }
 
 edit_offer(){
        this.navCtrl.push(Edit_offerPage)
  }  
  NuevoCanje(){
      this.navCtrl.push(NewCanjePage)
  }  
  
  edit_event(){
        this.navCtrl.push(Edit_eventPage)
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
  perfil(){
      this.navCtrl.push(AccountPage)
}
  
  VerCategorias(){
      this.navCtrl.push(CategoriesPage)
  }
  VerMasCanjes(){
      this.navCtrl.push(CategoryresultPage)
  } 
  category_result(){
      this.navCtrl.push(CategoryresultPage)
  } 
  

 search() {
    let modal = this.modalCtrl.create(SearchPage);
    modal.present();
  } 
}
