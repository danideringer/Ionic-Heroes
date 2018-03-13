import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { HeroesDetailsPage } from './heroes-details';
import { ComponentsModule } from './../../components/components.module';

@NgModule({
  declarations: [
    HeroesDetailsPage,
  ],
  imports: [
    IonicPageModule.forChild(HeroesDetailsPage),ComponentsModule
  ],
})
export class HeroesDetailsPageModule {}
