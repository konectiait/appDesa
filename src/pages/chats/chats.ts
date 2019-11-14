import { Component } from '@angular/core';
import { NavController, ModalController } from 'ionic-angular';
import { ChatServiceProvider } from '../../providers/chat-service/chat-service';
import { SearchPage } from '../search/search';
import { ChattingPage } from '../chatting/chatting';

@Component({
  selector: 'page-chats',
  templateUrl: 'chats.html'
})
export class ChatsPage {
  chatLst;
  constructor(public navCtrl: NavController, public modalCtrl: ModalController, public serviceChat: ChatServiceProvider) {
    this.getChats();
  }
  
  chatting(){
        this.navCtrl.push(ChattingPage)
  }
 
 search() {
    let modal = this.modalCtrl.create(SearchPage);
    modal.present();
  } 

  getChats() {    
    this.serviceChat.getChats()        
    .subscribe(
        (data)=> {
          this.chatLst=data;
        },
        (error)=>{console.log(error);}
    )   
  }

}
