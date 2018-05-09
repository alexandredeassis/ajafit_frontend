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
  constructor(private route: ActivatedRoute, private menuComponent: MenuComponent) { }

  ngOnInit() {
    this.id = +this.route.snapshot.paramMap.get('id');
    this.day = this.menuComponent.getDay(this.id);  
  }

}
