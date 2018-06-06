import { Component, OnInit } from "@angular/core";

import { Observable } from "rxjs/Observable";
import { Subject } from "rxjs/Subject";
import { of } from "rxjs/observable/of";

import { debounceTime, distinctUntilChanged, switchMap } from "rxjs/operators";

import { Item } from "../classes/item";
import { ItemsService } from "../item.service";

@Component({
  selector: "item-search",
  templateUrl: "./search.component.html",
  styleUrls: ["./search.component.css"]
})
export class SearchComponent implements OnInit {
  items$: Observable<Item[]>;
  private searchTerms = new Subject<string>();

  constructor(private itemService: ItemsService) {}

  search(term: string): void {
    this.searchTerms.next(term);
  }

  ngOnInit(): void {
    this.items$ = this.searchTerms.pipe(
      debounceTime(300),
      distinctUntilChanged(),
      //could be many Http requests here
      switchMap((term: string) => this.itemService.searchItems(term))
    );
  }
}
