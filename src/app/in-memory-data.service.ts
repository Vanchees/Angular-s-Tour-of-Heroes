import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const zasrantsy = [
      { id: 11, name: 'Капитан Ягуар' },
      { id: 12, name: 'Рядовой Куча' },
      { id: 13, name: 'Сержант Снежок' },
      { id: 14, name: 'Генерал Лайм' },
      { id: 15, name: 'Гибус цвета #216' },
      { id: 16, name: 'ПРОЧНЫЙ КИВЕР ЗА 2 РЕФА' },
      { id: 17, name: 'Get good Get LMAObox' },
      { id: 18, name: 'Лезвион' },
      { id: 19, name: 'Окулярис' },
      { id: 20, name: '( ͡° ͜ʖ ͡°)' }
    ];
    return {zasrantsy};
  }
}
