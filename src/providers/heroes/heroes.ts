import { HttpClient, HttpHeaders } from '@angular/common/http';
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
    return this.http.get("http://497c5218.ngrok.io/heros");
  }

  getComments(id: number){
    return this.http.get(`http://497c5218.ngrok.io/heros/${id}/comments`);
  }
  
  getAppearance(id: number){
    return this.http.get(`http://497c5218.ngrok.io/heros/${id}/appearances`);
  }
  
  createAppearance(id: number, body: any){
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
      })
    };
    return this.http.post(
      `http://497c5218.ngrok.io/heros/${id}/appearances`,
      body,
      httpOptions
    );
  }

  addComment(id: number, body: any){
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
      })
    };
    return this.http.post(
      `http://497c5218.ngrok.io/heros/${id}/comments`,
      body,
      httpOptions
    );
  }
}

