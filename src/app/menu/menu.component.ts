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
    i1.descriptions='Pack com 2 Crepiocas de Carne';
    i1.price = 12.00;
    list1 = [i1];
    monday.snacks1 = list1;

    
    let i2 = new Item();
    i2.id=6;
    i2.descriptions='Pack com 2 Crepiocas de Frango';
    i2.price = 10.00;
    monday.snacks1.push(i2);

    
    let i3 = new Item();
    i3.id=7;
    i3.descriptions='Pack com 2 Crepiocas de Atum';
    i3.price = 14.00;
    monday.snacks1.push(i3);
    
    let i33 = new Item();
    i33.id=8;
    i33.descriptions='Pack com 2 Crepiocas de Banana com canela';
    i33.price = 12.00;
    monday.snacks1.push(i33);
    
   //-------------
  
   let i4 = new Item();
   i4.id=9;
   i4.descriptions='Pack com 2 Crepiocas -- 1 Carne + 1 Frango';
   i4.price = 11.00;
   monday.snacks1.push(i4); 

   let i5 = new Item();
   i5.id=10;
   i5.descriptions='Pack com 2 Crepiocas -- 1 Carne + 1 Atum';
   i5.price = 13.00;
   monday.snacks1.push(i5);

   let i6 = new Item();
   i6.id=11;
   i6.descriptions='Pack com 2 Crepiocas -- 1 Atum + 1 Frango';
   i6.price = 12.00;
   monday.snacks1.push(i6);
  
   monday.snacks2 = this.middle(12);

   monday.snacks3 = this.end(20);

    this.menu.monday=monday;
  }

  end(i: number): Item[]{
    let list1: Item[];
    let i1 = new Item();
    i1.id=5;
    i1.descriptions='Suco detox';
    i1.price = 8.00;
    list1 = [i1];
   
    
    let i2 = new Item();
    i2.id=i++;
    i2.descriptions='Suco cenoura com mamão';
    i2.price = 8.00;
    list1.push(i2);


    let i3 = new Item();
    i3.id=i++;
    i3.descriptions='Suco Abacaxi com hortelã';
    i3.price = 8.00;
    list1.push(i3);
    

    let i4 = new Item();
    i4.id=i++;
    i4.descriptions='Limonada suiça';
    i4.price = 8.00;
    list1.push(i4);
    
    return list1;
  }

  middle(i: number): Item[]{
    let list1: Item[];
    let i1 = new Item();
    i1.id=5;
    i1.descriptions='Pack 3 Crepiocas- 2 Frango + Carne';
    i1.price = 15.00;
    list1 = [i1];
   
    
    let i2 = new Item();
    i2.id=i++;
    i2.descriptions='Pack 3 Crepiocas- 2 Carne + 1 Frango';
    i2.price = 15.00;
    list1.push(i2);

    
    let i3 = new Item();
    i3.id=i++;
    i3.descriptions='Pack 3 Crepiocas- 2 Frango + 1 Banana com canela';
    i3.price = 15.00;
    list1.push(i3);
    
   //-------------
  
   let i4 = new Item();
   i4.id=i++;
   i4.descriptions='Pack 3 Crepiocas- 1 Carne + 1 Frango + 1 Atum';
   i4.price = 15.00;
   list1.push(i4); 

   let i5 = new Item();
   i5.id=i++;
   i5.descriptions='Pack 3 Crepiocas- 2 Carne + 1 Banana com canela';
   i5.price = 15.00;
   list1.push(i5);

   let i6 = new Item();
   i6.id=i++;
   i6.descriptions='Pack 3 Crepiocas- 1 Frango + 1 Banana com canela + 1 Atum';
   i6.price = 15.00;
   list1.push(i6);
  

   let i7 = new Item();
   i7.id=i++;
   i7.descriptions='Pack 3 Crepiocas- 2 Banana com canela + 1 Atum';
   i7.price = 15.00;
   list1.push(i7);
  
   return list1;
  }

  getDay(id: number): Day{
    return this.menu.monday;
  }
   
}
