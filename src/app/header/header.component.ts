import { Component, OnInit, ViewContainerRef } from "@angular/core";
import { ToastsManager } from "ng2-toastr";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.css"]
})
export class HeaderComponent implements OnInit {
  title = "Manager Dashboard";

  constructor(public toastr: ToastsManager, vcr: ViewContainerRef) {
    this.toastr.setRootViewContainerRef(vcr);
  }

  ngOnInit() {
    setTimeout(() => {
      this.toastr.success("You are awesome!", "Success!");
    }, 2000);
  }

  showSuccess() {}
}
