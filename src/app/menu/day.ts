import {Item} from '../items/item';

export class Day{
    id: number;
    weekday: string;
    date: string;
    descriptions: string;
    snacks: Item[];
    option1: Item;
    option2: Item;
    option3: Item;
    valid: boolean;
}