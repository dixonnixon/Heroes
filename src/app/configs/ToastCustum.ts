import { ToastOptions } from "ng2-toastr";

export class ToastCustom extends ToastOptions {
  animate = "flyLeft"; // you can override any options available
  newestOnTop = false;
  showCloseButton = true;
}
