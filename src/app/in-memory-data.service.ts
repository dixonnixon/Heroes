import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const heroes = [
      { id: 11, name: 'Пан Гарнюня' },
      { id: 12, name: 'Точуган' },
      { id: 13, name: 'Бомбермен' },
      { id: 14, name: 'Радійло' },
      { id: 15, name: 'Магнета' },
      { id: 16, name: 'Гумо-чоловік' },
      { id: 17, name: 'Динама' },
      { id: 18, name: 'Доктор Мозок' },
      { id: 19, name: 'Віста' },
    ];
    return {heroes};
  }
}