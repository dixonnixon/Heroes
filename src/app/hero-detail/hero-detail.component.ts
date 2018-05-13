import { Component, OnInit, Input } from '@angular/core';
import { HeroService } from '../hero.service';
import { Hero } from '../classes/hero';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})


export class HeroDetailComponent implements OnInit {
  @Input() hero: Hero;
  constructor(
    //ActivatedRoute -> route info about this created component by route
    //could extract url parameters
    private route: ActivatedRoute,
    //HeroService -> gets data from server
    private heroService: HeroService,
    //location - is location: herf
    private location: Location,
  ) {}

  checkRoute(): void {
   
  }

  getHero(): void {
    //get :ID 
    // console.log(this.route.snapshot);
    //+sign convert string to a number
    
    if(this.route.routeConfig) {
      console.log(this.route.component);
      console.log(this.route.routeConfig);
    }
    const id = +this.route.snapshot.paramMap.get('id');
    //what if id will be a 0
    const idt = 0; 
    console.log(id);
    //what is .subscribe()?
    this.heroService.getHero(id)
      .subscribe(hero => this.hero = hero);
  }

  goBack(): void {
    this.location.back();
  }

  save(): void {
    this.heroService.updateHero(this.hero)
      .subscribe(() => this.goBack());
  }
  
  ngOnInit() {
    this.getHero();
    this.checkRoute();
  }

}
