import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
/**
 * Generated class for the HeroesGalleryPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-heroes-gallery',
  templateUrl: 'heroes-gallery.html',
})
export class HeroesGalleryPage {
  HeroPhoto: any
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HeroesGalleryPage');
    this.HeroPhoto = this.navParams.get("HeroPhoto");
  }

}
