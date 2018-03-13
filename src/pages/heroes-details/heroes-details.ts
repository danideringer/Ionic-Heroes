import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';


/**
 * Generated class for the HeroesDetailsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-heroes-details',
  templateUrl: 'heroes-details.html',
})
export class HeroesDetailsPage {
  HeroDetail: any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HeroesDetailsPage');
    console.log(this.navParams.get("HeroDetail"));
    this.HeroDetail = this.navParams.get("HeroDetail");
  }

}
