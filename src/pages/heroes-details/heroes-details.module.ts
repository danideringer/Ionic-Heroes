import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { HeroesDetailsPage } from './heroes-details';

@NgModule({
  declarations: [
    HeroesDetailsPage,
  ],
  imports: [
    IonicPageModule.forChild(HeroesDetailsPage),
  ],
})
export class HeroesDetailsPageModule {}
