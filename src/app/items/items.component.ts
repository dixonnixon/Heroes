import { Component, OnInit } from "@angular/core";
import { ItemsService } from "../item.service";
import { MessageService } from "../message.service";
import { Item } from "../classes/item";
import { ActivatedRoute } from "@angular/router";

//@Component - decorator for metadata
@Component({
  selector: "app-items",
  templateUrl: "./items.component.html",
  styleUrls: ["./items.component.css"]
})
export class ItemsComponent implements OnInit {
  items: Item[] = [];

  constructor(
    private route: ActivatedRoute,
    private itemsService: ItemsService,
    private messageService: MessageService
  ) {}

  add(name: string): void {
    name = name.trim();
    if (!name) {
      return;
    }
    this.itemsService.addItem({ name } as Item).subscribe(item => {
      this.items.push(item);
    });
  }

  delete(item: Item): void {
    this.items = this.items.filter(h => h !== item);
    this.itemsService.deleteItem(item).subscribe();
  }

  getItems(): void {    
    const id = +this.route.snapshot.paramMap.get("userId");
    //what if id will be a 0
    const idt = 0;
    console.log(id);
    this.itemsService
      .getitems(id)
      //???
      //count of elements are defined by .slice(start, end)
      .subscribe(items => (this.items = items));      
  }

  //never call constructor for get data
  ngOnInit() {
    //call to fetch mockup date after initializing
    this.getItems();
  }
}
