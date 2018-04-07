import { Component, OnInit } from '@angular/core';
import { Hero } from '../classes/hero';
// import { HEROES } from '../mockups/mock-heroes';
import { HeroService } from '../hero.service';
import { MessageService } from '../message.service';

//@Component - decorator for metadata
@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})


export class HeroesComponent implements OnInit {
  //init object of Hero
  // heroes: HEROES;
  heroes: Hero[];
  selectedHero: Hero;
  
  onSelect(hero: Hero): void {
    this.selectedHero = hero;
    this.messageService.choose(hero.id, hero.name);
  }

  // selectedHero: Hero = {
  //   id: 19,
  //   name: 'Вітста'
  // };

  //hero service Dependency inJection
  //with private prop of a class
  //hero-service is singletone instance of represented service
  constructor(private heroService: HeroService, private messageService: MessageService) {}

  getHeroes(): void {
    // this.heroes = this.heroService.getHeroes();
    //asynchronouse sign
    this.heroService.getHeroes()
      .subscribe(heroes => this.heroes = heroes);
      // .subscribe(heroes => this.heroes = heroes.slice(1, 5));
  }

  //never call constructor for get data
  ngOnInit() {
    //call to fetch mockup date after initializing
    this.getHeroes();
  }

}
