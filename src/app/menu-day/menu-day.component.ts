import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import 'rxjs/add/operator/filter';
import { Location } from '@angular/common';

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
  

  
  constructor(private route: ActivatedRoute, private menuComponent: MenuComponent, private router: Router) { }

  ngOnInit() {
    this.id = +this.route.snapshot.paramMap.get('id');
    this.day = this.menuComponent.getDay(this.id);  
  }

  saladItemPanel(op: number): string {
    if(this.day.saladCount() == 2){
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

  
  goBack(): void {
    console.log('go back');
    this.router.navigate(['/dashboard'], {fragment: 'cardapio'});
  }
}
