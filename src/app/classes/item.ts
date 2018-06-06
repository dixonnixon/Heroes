import { ItemState } from "./ItemState";

export class Item {
  id: number;
  name: string;
  state: ItemState;
  type: string;
  date: Date;
  serial: string;
  details: Object[];
}
