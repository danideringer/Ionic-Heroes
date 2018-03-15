import { Component, Input} from '@angular/core';
import { HeroesProvider } from './../../providers/heroes/heroes';
import { ModalController } from 'ionic-angular';

/**
 * Generated class for the HeroesCommentsComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'heroes-comments',
  templateUrl: 'heroes-comments.html'
})
export class HeroesCommentsComponent {
  
  comments: any;
  @Input()
  id: number;

  constructor(private heroProv: HeroesProvider, private modalCtrl: ModalController) {
  }
 
  ngOnInit(){
    this.loadData();
  }

  loadData(){
    this.heroProv.getComments(this.id)
      .subscribe((data) => {
        this.comments = data;
      })
  }

  openModal(){
    let myModal = this.modalCtrl.create("AddCommentPage",{id: this.id});

    myModal.onDidDismiss(() => {
      this.loadData();
    })
    myModal.present();
  }
}
