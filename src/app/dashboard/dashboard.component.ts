import { Component, OnInit } from '@angular/core';
import { ItemsService } from '../item.service';
import { Item } from '../classes/item';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  items: Item[] = []; 
  constructor(private itemsService: ItemsService) {} 
  
  getItems(): void {

    this.itemsService.getitems(1)
      .subscribe(items => this.items = items);
  }  

  ngOnInit() {
    this.getItems();
  }

}
