import { InMemoryDbService } from "angular-in-memory-web-api";
import { ItemState } from "./classes/ItemState";
import { ItemType } from "./classes/itemType";

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const users = [
      { id: 11, name: "Пан Гарнюня", devicesInUse: 4, incedents: {open: [13], closed: [2, 3], pending: []} },
      { id: 12, name: "Точуган", devicesInUse: 5, incedents: {open: [19], closed: [4], pending: [11]} },
      { id: 13, name: "Бомбермен", devicesInUse: 5, incedents: {open: [], closed: [], pending: [16]} },
      { id: 14, name: "Радійло", devicesInUse: 7, incedents: {open: [], closed: [5,6], pending: []} },
      { id: 15, name: "Магнета", devicesInUse: 8, incedents: {open: [14], closed: [], pending: []} },
      { id: 16, name: "Гумо-чоловік", devicesInUse: 4, incedents: {open: [], closed: [7], pending: [17]} },
      { id: 17, name: "Динама", devicesInUse: 3, incedents: {open: [], closed: [], pending: []} },
      { id: 18, name: "Доктор Мозок", devicesInUse: 5, incedents: {open: [], closed: [9,10], pending: [18]} },
      { id: 19, name: "Віста", devicesInUse: 3, incedents: {open: [15], closed: [12], pending: []} }
    ];

    const items = [
      {
        id: 1,
        name: "Принтер",
        state: ItemState.ON,
        type: ItemType.PRINTER,
        date: new Date("10-01-2015"),
        serial: "123FVfV65GH3DF",
        details: [
          {
            printedPAges: 11
          }
        ]
      },
      {
        id: 2,
        name: "Монітор",
        state: ItemState.ON,
        type: ItemType.MONITOR,
        date: new Date("24-11-2017"),
        serial: "156F48T7R",
        details: []
      },
      {
        id: 3,
        name: "Мишка",
        state: ItemState.ON,
        type: ItemType.MOUSE,
        date: new Date("24-12-2001"),
        serial: "7898R9849S",
        details: []
      },
      {
        id: 4,
        name: "Клавіатура",
        state: ItemState.ON,
        type: ItemType.KEYBOARD,
        date: new Date("01-03-2016"),
        serial: "SD48DF1SD3F",
        details: []
      }
    ];
    return { users, items };
  }
}
