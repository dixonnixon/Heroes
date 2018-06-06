import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ItemsComponent } from "./items/items.component";
import { MessagesComponent } from "./messages/messages.component";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { ItemDetailComponent } from "./item-detail/item-detail.component";
import { UsersComponent } from "./users/users.component";

const routes: Routes = [
  { path: "items/:userId", component: ItemsComponent },
  { path: "messages", component: MessagesComponent },
  { path: "dashboard", component: DashboardComponent },
  { path: "users", component: UsersComponent },
  { path: "detail/:id", component: ItemDetailComponent },
  { path: "", redirectTo: "/dashboard", pathMatch: "full" }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  // declarations: []
  exports: [RouterModule]
})
export class AppRoutingModule {}
