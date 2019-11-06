import { Component } from '@angular/core';
import { NavController,ViewController } from 'ionic-angular';
import { CategoriesPage } from '../categories/categories';
import {CategoryresultPage} from '../categoryresult/categoryresult';

@Component({
  selector: 'page-search',
  templateUrl: 'search.html'
})
export class SearchPage {

  constructor(public navCtrl: NavController,  public viewCtrl: ViewController) {

  }
  dismiss() {
		this.viewCtrl.dismiss();
  }
  VerCategorias(){
    this.navCtrl.push(CategoriesPage)
  }
  category_result(){
    this.navCtrl.push(CategoryresultPage)
} 

}
