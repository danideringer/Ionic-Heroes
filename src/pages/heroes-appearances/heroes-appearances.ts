import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';
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
  to: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, private HeroesProv: HeroesProvider, public modalCtrl: ModalController) {
  }

  ionViewDidLoad() {
    this.to = this.navParams.get("HeroAppearance");
    this.loadData();
  }
  
  loadData(){
    this.HeroesProv.getAppearance(this.to['id'])
      .subscribe((data) => {
        this.appearances = data;
        console.log(data);
      })
  }
  openModal(){
    let myModal = this.modalCtrl.create("HeroFormPage");

    myModal.onDidDismiss(()=>{
      this.loadData();

    })

    myModal.present();
  } 

  
}
