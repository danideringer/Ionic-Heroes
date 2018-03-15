import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HeroesProvider } from './../../providers/heroes/heroes';

/**
 * Generated class for the HeroGraphicPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-hero-graphic',
  templateUrl: 'hero-graphic.html',
})
export class HeroGraphicPage {

  battle: any;
  battles: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, private heroProv: HeroesProvider) {
  }

  ionViewDidLoad() {
    this.battle = this.navParams.get("heroBattle");
    this.loadData();
  }

  loadData(){
    this.heroProv.getBattles(this.battle['id'])
      .subscribe((data) => {
        this.battles = data;
      })
  }
}
