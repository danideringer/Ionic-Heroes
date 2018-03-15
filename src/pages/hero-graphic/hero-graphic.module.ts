import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { HeroGraphicPage } from './hero-graphic';
import { ComponentsModule } from './../../components/components.module';

@NgModule({
  declarations: [
    HeroGraphicPage,
  ],
  imports: [
    IonicPageModule.forChild(HeroGraphicPage),
    ComponentsModule
  ],
})
export class HeroGraphicPageModule {}
