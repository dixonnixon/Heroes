import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";
import { HttpClientInMemoryWebApiModule } from "angular-in-memory-web-api";
import { InMemoryDataService } from "./in-memory-data.service";
import { FlexLayoutModule } from "@angular/flex-layout";
import { AngularFontAwesomeModule } from "angular-font-awesome";
import { ObservableMedia } from "@angular/flex-layout";
import { AppComponent } from "./app.component";
import { ItemsComponent } from "./items/items.component";
import { FormsModule } from "@angular/forms";
import { ItemDetailComponent } from "./item-detail/item-detail.component";
import { ItemsService } from "./item.service";
import { MessagesComponent } from "./messages/messages.component";
import { MessageService } from "./message.service";
import { AppRoutingModule } from ".//app-routing.module";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { SearchComponent } from "./search/search.component";
import { UsersComponent } from "./users/users.component";
import { UserService } from "./user.service";
import { HeaderComponent } from "./header/header.component";
import { SideBarComponent } from "./side-bar/side-bar.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { ToastModule, ToastOptions } from "ng2-toastr";
import { ToastCustom } from "./configs/ToastCustum";
import { AgGridModule } from 'ag-grid-angular';

@NgModule({
  //components array declared here
  declarations: [
    AppComponent,
    ItemsComponent,
    ItemDetailComponent,
    MessagesComponent,
    DashboardComponent,
    SearchComponent,
    UsersComponent,
    HeaderComponent,
    SideBarComponent
  ],
  imports: [
    BrowserModule,
    AgGridModule.withComponents([]),
    BrowserAnimationsModule,
    ToastModule.forRoot(),
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    FlexLayoutModule,
    AngularFontAwesomeModule,

    //here should be a real server
    HttpClientInMemoryWebApiModule.forRoot(InMemoryDataService, {
      dataEncapsulation: false
    })
  ],
  providers: [
    //to tell service to able useing it in any class
    { provide: ToastOptions, useClass: ToastCustom },
    ItemsService,
    MessageService,
    UserService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
