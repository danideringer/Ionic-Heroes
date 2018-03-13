import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HeroesProvider} from '../../providers/heroes/heroes'
/**
 * Generated class for the HeroesListPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-heroes-list',
  templateUrl: 'heroes-list.html',
})
export class HeroesListPage {

  heroes: any;
  constructor(public navCtrl: NavController, public navParams: NavParams, private HeroesProv: HeroesProvider) {
  }

  ionViewWillLoad() {
    console.log('ionViewWillLoad HeroesListPage');
    this.HeroesProv.getAll()
      .subscribe((data) => {
        this.heroes = data;
        console.log(this.heroes);
      })
  }
  getDetails(heroes){
    this.navCtrl.push("HeroesDetailsPage", {HeroDetail: heroes});
  }
}
