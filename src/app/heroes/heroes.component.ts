import { Component, OnInit } from '@angular/core';

//@Component - decorator for metadata
@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  hero: string = "Windstorm";
  constructor() { }

  ngOnInit() {
  }

}
