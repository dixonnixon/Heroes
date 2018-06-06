import { Component, OnInit, Input } from "@angular/core";
import { ItemsService } from "../item.service";
import { ActivatedRoute } from "@angular/router";
import { Location } from "@angular/common";
import { Item } from "../classes/item";

@Component({
  selector: "app-item-detail",
  templateUrl: "./item-detail.component.html",
  styleUrls: ["./item-detail.component.css"]
})
export class ItemDetailComponent implements OnInit {
  @Input() item: Item;
  constructor(
    //ActivatedRoute -> route info aboute this created component by route
    //could extract url parameters
    private route: ActivatedRoute,
    //Service -> gets data from server
    private itemsService: ItemsService,
    //location - is location: herf
    private location: Location
  ) {}

  getItem(): void {
    //get :ID
    // console.log(this.route.snapshot);
    //+sign convert string to a number
    const id = +this.route.snapshot.paramMap.get("id");
    //what if id will be a 0
    const idt = 1;
    console.log(id);
    //what is .subscribe()?
    this.itemsService.getItem(id).subscribe(item => (this.item = item));
  }

  goBack(): void {
    this.location.back();
  }

  save(): void {
    this.itemsService.updateItem(this.item).subscribe(() => this.goBack());
  }

  ngOnInit() {
    this.getItem();
  }
}
