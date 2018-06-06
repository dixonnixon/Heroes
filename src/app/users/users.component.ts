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
