import { Component, OnInit } from "@angular/core";
import { UserService } from "../user.service";
import { MessageService } from "../message.service";
import { User } from "../classes/user";

@Component({
  selector: "app-users",
  templateUrl: "./users.component.html",
  styleUrls: ["./users.component.css"]
})
export class UsersComponent implements OnInit {
  users: User[] = [];

  columnDefs = [
    //id: 11, name: "Пан Гарнюня", devicesInUse: 4, incedents: {open: [13], closed: [2, 3], pending: []}
    {headerName: "Identification number", field: "id"},
    { headerName: "Employee name", field: "name" },
    { headerName: "Items in use", field: "devicesInUse" },
    { headerName: "Open incedents", field: "incedents.open" },
    { headerName: "Pending incedents", field: "incedents.pending" },
    { headerName: "Closed incedents", field: "incedents.closed" }
  ];

  constructor(
    private usersService: UserService,
    private messageService: MessageService
  ) {}

  getUsers(): void {
    this.usersService.getUsers().subscribe(users => (this.users = users));
  }

  ngOnInit() {
    this.getUsers();
  }
}
