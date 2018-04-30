import {Item} from '../items/item';
import {User} from '../users/user';
import {Address} from './address';
import {OrderItem} from './orderItem';

export class Order{
    id: number;
    descriptions: string;
    user: User;
    address: Address;
    orderItems: OrderItem[];
}