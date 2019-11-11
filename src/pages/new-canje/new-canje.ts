import { Component } from '@angular/core';
import { NavController,ToastController } from 'ionic-angular';
import { ProductServiceProvider } from '../../providers/product-service/product-service';
import { GlobalProductProvider } from '../../providers/global-product/global-product';
import { TabsPage } from '../tabs/tabs';

@Component({
  selector: 'page-new-canje',
  templateUrl: 'new-canje.html',
})
export class NewCanjePage {
  gender: string = "female";
  constructor(public navCtrl: NavController, public toastController: ToastController, public productService: ProductServiceProvider, private product:GlobalProductProvider) {

  }

tabs(){
        this.navCtrl.setRoot(TabsPage)
  }

  postCanje() {    
    this.product.Id = '0';
    this.product.IdTipo = '1';
    this.product.IdUsuario = '3';
    this.product.IdEstado = '1';
    this.product.IdCategoria = '1';
    this.productService.postProduct(this.product)        
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