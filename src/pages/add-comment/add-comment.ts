import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController} from 'ionic-angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HeroesProvider } from './../../../src/providers/heroes/heroes';

/**
 * Generated class for the AddCommentPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-add-comment',
  templateUrl: 'add-comment.html',
})
export class AddCommentPage {
  addComment: FormGroup;
  id: number;
  constructor(public navCtrl: NavController, public navParams: NavParams, private fb: FormBuilder, private heroProv: HeroesProvider, private viewCtrl: ViewController) {
  }

  ionViewDidLoad(){
    this.id = this.navParams.get("id");
    this.addComment = this.fb.group({
      comment: ['', [Validators.required, Validators.maxLength(140)]]
    })
  }

  submitForm(){
    this.heroProv.addComment(this.id ,this.addComment.value)
      .subscribe((data) => {
        this.closeModal();
      })
  }

  closeModal(){
    this.viewCtrl.dismiss();
  }
}
