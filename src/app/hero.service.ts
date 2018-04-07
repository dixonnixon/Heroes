import { Injectable } from '@angular/core';
import { Hero } from './classes/hero';
import { HEROES } from './mockups/mock-heroes';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { MessageService } from './message.service';

@Injectable()
export class HeroService {

  constructor(private messageService: MessageService) {}

  // getHeroes(): Hero[] {
  //   return HEROES;
  // }
  getHeroes(): Observable<Hero[]> {
    // return of(HEROES);
    //of() to return from mock
    this.messageService.add('HeroService: герої отримані;');
    return of(HEROES);
  }

  getHero(id: number): Observable<Hero> {
    // return of(HEROES);
    //of() to return from mock
    this.messageService.add(`HeroService: ID героя=${id}`);
    return of(HEROES.find(hero => hero.id === id));
  }

}
