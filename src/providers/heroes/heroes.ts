import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the HeroesProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class HeroesProvider {

  constructor(public http: HttpClient) {
    console.log('Hello HeroesProvider Provider');

  }

  getAll(){
    return this.http.get("http://5b3ef5b3.ngrok.io/heros");
  }

}
