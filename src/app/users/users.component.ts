import { Component, OnInit, ViewChild, ViewContainerRef } from "@angular/core";
import { UserService } from "../user.service";
import { MessageService } from "../message.service";
import { User } from "../classes/user";
import { AgGridNg2 } from "ag-grid-angular";
import { ToastsManager } from "ng2-toastr";

@Component({
  selector: "app-users",
  templateUrl: "./users.component.html",
  styleUrls: ["./users.component.css"]
})
export class UsersComponent implements OnInit {
  @ViewChild("agGrid") agGrid: AgGridNg2;

  users: User[] = [];

  columnDefs = [
    //id: 11, name: "Пан Гарнюня", devicesInUse: 4, incedents: {open: [13], closed: [2, 3], pending: []}
    {
      headerName: "Identification number",
      field: "id",
      checkboxSelection: true
    },
    { headerName: "Employee name", field: "name" },
    { headerName: "Items in use", field: "devicesInUse" },
    { headerName: "Open incedents", field: "incedents.open" },
    { headerName: "Pending incedents", field: "incedents.pending" },
    { headerName: "Closed incedents", field: "incedents.closed" }
  ];

  constructor(
    private usersService: UserService,
    private messageService: MessageService,
    public toastr: ToastsManager,
    vcr: ViewContainerRef
  ) {
    this.toastr.setRootViewContainerRef(vcr);
  }

  getUsers(): void {
    this.usersService.getUsers().subscribe(users => (this.users = users));
  }

  ngOnInit() {
    this.getUsers();
  }
  getSelectedRows() {
    const selectedNodes = this.agGrid.api.getSelectedNodes();
    const selectedData = selectedNodes.map(node => node.data);
    const selectedDataStringPresentation = selectedData
      .map(node => `${node.id} open incedents ${node.incedents.open.length}`)
      .join(", ");

    this.toastr.info(`Selected nodes: ${selectedDataStringPresentation}`);
  }
}
