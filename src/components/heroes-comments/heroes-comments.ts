import { Component, Input} from '@angular/core';
import { HeroesProvider } from './../../providers/heroes/heroes';
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

  constructor(private HeroesProv: HeroesProvider) {
  }
 
  ngOnInit(){
    this.HeroesProv.getComments(this.id)
      .subscribe((data) => {
        this.comments = data;
        console.log(data);
      })
  }

}
