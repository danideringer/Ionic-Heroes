import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { HeroesGalleryPage } from './heroes-gallery';

@NgModule({
  declarations: [
    HeroesGalleryPage,
  ],
  imports: [
    IonicPageModule.forChild(HeroesGalleryPage),
  ],
})
export class HeroesGalleryPageModule {}
