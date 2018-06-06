import { Injectable } from "@angular/core";
import { Observable } from "rxjs/Observable";
import { of } from "rxjs/observable/of";
import { MessageService } from "./message.service";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { catchError, map, tap } from "rxjs/operators";
import { Item } from "./classes/item";

const httpOptions = {
  headers: new HttpHeaders({ "Content-Type": "application/json" })
};

@Injectable()
export class ItemsService {
  private itemsUrl = "api/items";

  constructor(
    private messageService: MessageService,
    private http: HttpClient
  ) {}

  private log(message: string) {
    this.messageService.add("ItemService: " + message);
  }

  getitems(id: number): Observable<Item[]> {

    return this.http
      .get<Item[]>(this.itemsUrl)
      .pipe(
        tap(items => this.log("fetched items " + items.length)),
        catchError(this.handleError("getitems", []))
      );
  }

  searchItems(term: string): Observable<Item[]> {
    if (!term.trim()) {
      return of([]);
    }
    //url for GET includes a query string with search term
    return this.http
      .get<Item[]>(`api/items/?name=${term}`)
      .pipe(
        tap(_ => this.log(`found items matching "${term}"`)),
        catchError(this.handleError<Item[]>("searchitems", []))
      );
  }

  public handleError<T>(operation = "operation", result?: T) {
    //what means of <object><type> => {}
    return (error: any): Observable<T> => {
      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  getItem(id: number): Observable<Item> {
    const url = `${this.itemsUrl}/${id}`;

    this.messageService.add(`ItemService: ID = ${id}`);
    console.log(this.http.get<Item>(url));
    return this.http
      .get<Item>(url)
      .pipe(
        tap(_ => this.log(`fetched item id = ${id}`)),
        catchError(this.handleError<Item>(`getItem id =${id}`))
      );
  }

  updateItem(item: Item): Observable<any> {
    return this.http
      .put(this.itemsUrl, item, httpOptions)
      .pipe(
        tap(_ => this.log(`updated item id = ${item.id}`)),
        catchError(this.handleError<any>("updateItem"))
      );
  }

  addItem(item: Item): Observable<Item> {
    return this.http
      .post<Item>(this.itemsUrl, item, httpOptions)
      .pipe(
        tap((item: Item) => this.log(`added item w/ id=${item.id}`)),
        catchError(this.handleError<Item>("addItem"))
      );
  }

  deleteItem(item: Item | number): Observable<Item> {
    const id = typeof item === "number" ? item : item.id;
    const url = `${this.itemsUrl}/${id}`;
    return this.http
      .delete<Item>(url, httpOptions)
      .pipe(
        tap(_ => this.log(`deleted item id=${id}`)),
        catchError(this.handleError<Item>("deleteItem"))
      );
  }
}
