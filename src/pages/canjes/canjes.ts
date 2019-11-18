import { Component } from '@angular/core';
import { NavController, ModalController,NavParams} from 'ionic-angular';
 import { StorePage } from '../store/store';
 import { EventdetailPage } from '../eventdetail/eventdetail';
 import { OfferdetailPage } from '../offerdetail/offerdetail';
 import { SearchPage } from '../search/search';
 import { MapPage } from '../map/map';
 import { Edit_eventPage } from '../edit_event/edit_event';
 import { NewCanjePage } from '../new-canje/new-canje';
 import { MatchPage } from '../match/match';
 import { ProductServiceProvider } from '../../providers/product-service/product-service';
 import { PedidosServiceProvider } from '../../providers/pedidos-service/pedidos-service';
 import { UserServiceProvider } from '../../providers/user-service/user-service';


@Component({
  selector: 'page-canjes',
  templateUrl: 'canjes.html',
})
export class CanjesPage {
  canjesLst;
  recibidosLst:any;
  near: string = "Ofrecidos";
  tokenUsuario;
  IdUsuario:any;

  constructor(public navCtrl: NavController, public modalCtrl: ModalController, public userService: UserServiceProvider,public navParams: NavParams, public serviceProd: ProductServiceProvider, public servicePedido:PedidosServiceProvider) {
    this.tokenUsuario = this.navParams.get('tokenU');  
    this.IdUsuario="3";
    this.getOfrecidos(this.IdUsuario);
    this.getRecibidos(this.IdUsuario);
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
  
  getOfrecidos(idUsuario) {    
    this.serviceProd.getProductByUser(idUsuario)        
    .subscribe(
        (data:any)=> {
          this.canjesLst = data;   // get data in result variable
        },
        (error)=>{console.log(error);}
    )  
  }
  getRecibidos(idUsuario) {  
    //Obtener el idUsuario  
    this.servicePedido.getPedidosRecibidosByUser(idUsuario)        
    .subscribe(
        (data:any)=> {
          this.recibidosLst = data;
        },
        (error)=>{console.log(error);}
    )  
  }
  
}
