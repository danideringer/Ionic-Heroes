import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { HeroesAppearancesPage } from './heroes-appearances';

@NgModule({
  declarations: [
    HeroesAppearancesPage,
  ],
  imports: [
    IonicPageModule.forChild(HeroesAppearancesPage),
  ],
  entryComponents: [
    HeroesAppearancesPage,
  ]
})
export class HeroesAppearancesPageModule {}
