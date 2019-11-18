import { Component, ViewChild, ElementRef } from '@angular/core';
import { NavController, ModalController } from 'ionic-angular';
//import {  GoogleMaps,  GoogleMap,  GoogleMapsEvent,  GoogleMapOptions} from '@ionic-native/google-maps';
import { SearchPage } from '../search/search';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import {
  GoogleMaps,
  GoogleMap,
  GoogleMapsEvent,
  GoogleMapOptions,
  CameraPosition,
  MarkerOptions,
  Marker,
  Environment
} from '@ionic-native/google-maps';



@Component({
  selector: 'page-map',
  templateUrl: 'map.html'
})
export class MapPage {
  //map: GoogleMap;
  
  
  constructor(public navCtrl: NavController, public modalCtrl: ModalController, public geolocation:Geolocation) {
    //this.loadMap();
    this.ObtenerUbicacion();
  }
  
  ionViewDidLoad(){
    //this.map=this.abrirMAPA();
    
  }
  

 search() {
    let modal = this.modalCtrl.create(SearchPage);
    modal.present();
  } 
  
  ObtenerUbicacion(){

    var options = {
      enableHighAccuracy: true,
      timeout: 5000,
      maximumAge: 0
    };
    
      navigator.geolocation.getCurrentPosition(this.onSuccess, this.onError);
  }
  onError(error) {
      alert("Error al obtener la posicion");
  }

   onSuccess(position) {
      console.log("LAT: "+position.coords.latitude);
      console.log("LONG: "+position.coords.longitude);
       
       let mapOptions: GoogleMapOptions = {
        camera: {
          target: {
            lat: position.coords.latitude,
            lng: position.coords.longitude
          },
          zoom: 12,
          tilt: 30
        }
      };

      let map2 = GoogleMaps.create('map_canvas', mapOptions);
      
      let marker: Marker = map2.addMarkerSync({
        title: 'Ionic',
        icon: 'blue',
        animation: 'DROP',
        position: {
          lat: position.coords.latitude,
          lng: position.coords.longitude
        }
      });
      /*
      marker.on(GoogleMapsEvent.MARKER_CLICK).subscribe(() => {
        alert('clicked');
      });
*/

    }
  

 
}
  

 

