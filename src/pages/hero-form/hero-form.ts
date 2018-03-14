import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HeroesProvider } from './../../../src/providers/heroes/heroes';
/**
 * Generated class for the HeroFormPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-hero-form',
  templateUrl: 'hero-form.html',
})
export class HeroFormPage {
  form: FormGroup;
  years = [1992, 1993, 1994, 1995];

  constructor(private heroProv: HeroesProvider, public navCtrl: NavController, public navParams: NavParams, public viewCtrl: ViewController, private fb: FormBuilder) {
  }

  ionViewDidLoad() {
    this.form = this.fb.group({
      year: ['', Validators.required],
      appearance: ['', Validators.required]
    })
  }


  submitForm(){
    this.heroProv.createAppearance(4,this.form.value)
      .subscribe((data) => {
        this.closeModal();
      })
  }

  closeModal() {
    this.viewCtrl.dismiss();
  }
}
