import { InMemoryDbService } from "angular-in-memory-web-api";
import { ItemState } from "./classes/ItemState";
import { ItemType } from "./classes/itemType";

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const users = [
      { id: 11, name: "Пан Гарнюня" },
      { id: 12, name: "Точуган" },
      { id: 13, name: "Бомбермен" },
      { id: 14, name: "Радійло" },
      { id: 15, name: "Магнета" },
      { id: 16, name: "Гумо-чоловік" },
      { id: 17, name: "Динама" },
      { id: 18, name: "Доктор Мозок" },
      { id: 19, name: "Віста" }
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
