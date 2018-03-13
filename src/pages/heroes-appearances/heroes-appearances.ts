import { Component, Input } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HeroesProvider } from './../../providers/heroes/heroes';
/**
 * Generated class for the HeroesAppearancesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-heroes-appearances',
  templateUrl: 'heroes-appearances.html',
})
export class HeroesAppearancesPage {

  appearances: any;
  id: number;

  constructor(public navCtrl: NavController, public navParams: NavParams, private HeroesProv: HeroesProvider) {
  }

  ionViewDidLoad() {
    this.id = this.navParams.get("HeroAppearance");
    this.HeroesProv.getAppearance(this.id)
      .subscribe((data) => {
        this.appearances = data;
        console.log(data);
      })
  }

}
