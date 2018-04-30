import { Injectable } from '@angular/core';
import {Item} from './items/item';

@Injectable()
export class ItemsService {
  items: Item[] = [{
    id: 1,
    price: '10',
    descriptions: 'desc',
    images: null
  },
  {
    id: 2,
    price: '20',
    descriptions: 'desc2',
    images: null
  },
  {
    id: 3,
    price: '30',
    descriptions: 'desc3',
    images: null
  },
  {
    id: 4,
    price: '40',
    descriptions: 'desc4',
    images: null
  }];
  constructor() { }

}
