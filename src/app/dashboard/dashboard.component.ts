import { Component, OnInit } from "@angular/core";
import { ItemsService } from "../item.service";
import { Item } from "../classes/item";
import { User } from "../classes/user";
import { UserService } from "../user.service";

@Component({
  selector: "app-dashboard",
  templateUrl: "./dashboard.component.html",
  styleUrls: ["./dashboard.component.css"]
})
export class DashboardComponent implements OnInit {
  items: Item[] = [];
  users: User[] = [];

  constructor(
    private itemsService: ItemsService,
    private usersService: UserService
  ) {}

  getStats(): void {
    this.itemsService.getitems(1).subscribe(items => (this.items = items));
    this.usersService.getUsers().subscribe(users => (this.users = users));
   
    
  }

  ngOnInit() {
    this.getStats();
    console.log(this.items);
  }
}
