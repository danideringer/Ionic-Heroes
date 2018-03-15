import { NgModule } from '@angular/core';
import { HeroesCompanyComponent } from './heroes-company/heroes-company';
import { IonicModule } from 'ionic-angular';
import { HeroesCommentsComponent } from './heroes-comments/heroes-comments';
import { HeroGraphicComponent } from './hero-graphic/hero-graphic';

@NgModule({
	declarations: [HeroesCompanyComponent,
    HeroesCommentsComponent,
    HeroGraphicComponent],
	imports: [IonicModule],
	exports: [HeroesCompanyComponent,
    HeroesCommentsComponent,
    HeroGraphicComponent]
})
export class ComponentsModule {}
