import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import 'rxjs/add/operator/filter';

import {Menu} from '../menu/menu';
import {Day} from '../menu/day';

import {MenuComponent} from '../menu/menu.component';

@Component({
  selector: 'app-menu-day',
  templateUrl: './menu-day.component.html',
  styleUrls: ['./menu-day.component.css']
})
export class MenuDayComponent implements OnInit {

  id: number;
  menu: Menu;
  day: Day;
  salad1 = false;
  salad2 = false;
  salad3 = false;
  
  constructor(private route: ActivatedRoute, private menuComponent: MenuComponent) { }

  ngOnInit() {
    this.id = +this.route.snapshot.paramMap.get('id');
    this.day = this.menuComponent.getDay(this.id);  
  }

  saladItemPanel(op: number): string {
    if(this.saladCount() == 2){
      if(op==1)
        return 'salad-item-panel50_1';
       else if(op == 2){
         return 'salad-item-panel50_2';
       }
       else{
        return 'salad-item-panel50_3';
       } 
    }else{
      return 'salad-item-panel100';
    }
  }
  saladCount(): number{
    let c =0;
    if(this.salad1)
      c++;
    
    if(this.salad2)
      c++;
   
    if(this.salad3)
      c++;
     
      return c;
  }
}
