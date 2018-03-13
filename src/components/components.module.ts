import { NgModule } from '@angular/core';
import { HeroesCompanyComponent } from './heroes-company/heroes-company';
import { IonicModule } from 'ionic-angular';
import { HeroesCommentsComponent } from './heroes-comments/heroes-comments';

@NgModule({
	declarations: [HeroesCompanyComponent,
    HeroesCommentsComponent],
	imports: [IonicModule],
	exports: [HeroesCompanyComponent,
    HeroesCommentsComponent]
})
export class ComponentsModule {}
