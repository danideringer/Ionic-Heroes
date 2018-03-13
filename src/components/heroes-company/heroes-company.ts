import { Component, Input } from '@angular/core';

/**
 * Generated class for the HeroesCompanyComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'heroes-company',
  templateUrl: 'heroes-company.html'
})
export class HeroesCompanyComponent {

  @Input()
  company: string;

  constructor() {
  }

}
