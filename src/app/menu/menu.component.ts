import { Component, OnInit, Injectable } from '@angular/core';


import {UsersComponent} from '../users/users.component';
import {ItemsComponent} from '../items/items.component';

import {User} from '../users/user';
import {Menu} from './menu';
import {Day} from './day';
import {Item} from '../items/item';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})

@Injectable()
export class MenuComponent implements OnInit {

  menu: Menu;

  constructor(private usersComponent: UsersComponent) { this.load();}

  ngOnInit() {
  
  }

  load(): void{
    this.menu = new Menu();
    this.menu.id=1;
     
    let monday = new Day();
    monday.id=1;
    monday.weekday='SEGUNDA';
    
    let op1 = new Item();
    op1.id=1;
    op1.descriptions='Salada de penne com espinafre';
    op1.price=10.00;
    monday.option1=op1;


    let op2 = new Item();
    op2.id=2;
    op2.descriptions='Salada de arroz vermelho com frango desfiado';
    op2.price=12.00;
    monday.option2=op2;


    let op3 = new Item();
    op3.id=3;
    op3.descriptions='Mix de folhas com atum.';
    op3.price=14.55;
    monday.option3=op3;

    let list1: Item[];
    let i1 = new Item();
    i1.id=5;
    i1.descriptions='Crepioca de carne';
    i1.price = 7.00;
    list1 = [i1];
    monday.snacks1 = list1;

    let list2: Item[];
    let i2 = new Item();
    i2.id=6;
    i2.descriptions='Crepioca de frango';
    i2.price = 5.00;
    list2 = [i2];
    monday.snacks1.push(i2);

    let list3: Item[];
    let i3 = new Item();
    i3.id=7;
    i3.descriptions='Crepioca de atum';
    i3.price = 6.00;
    list3 = [i3];
    monday.snacks1.push(i3);
    
    
    //list1[0] = new Item();
   // list1[0].id=4;
    /*list1[0].descriptions='Crepioca de frango';
    list1[0].price = 6.00;
    
    list1[1] = new Item();
    list1[1].id=5;
    list1[1].descriptions='Crepioca de carne';
    list1[1].price = 7.00;

    list1[2] = new Item();
    list1[2].id=6;
    list1[2].descriptions='Crepioca de atum';
    list1[2].price = 8.00;
    
    list1[3] = new Item();
    list1[3].id=7;
    list1[3].descriptions='Crepioca de bacana';
    list1[3].price = 9.00;
    */
    
    

    this.menu.monday=monday;
  }

  getDay(id: number): Day{
    return this.menu.monday;
  }
   
}
