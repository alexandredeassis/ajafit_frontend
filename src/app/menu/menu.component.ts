import { Component, OnInit } from '@angular/core';


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
    monday.option1=op1;

    let op2 = new Item();
    op2.id=2;
    op2.descriptions='Salada de arroz vermelho com frango desfiado';
    monday.option2=op2;


    let op3 = new Item();
    op3.id=3;
    op3.descriptions='Mix de folhas com atum.';
    monday.option3=op3;

    this.menu.monday=monday;
  }

}
