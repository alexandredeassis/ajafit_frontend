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
  salad1 = false;
  salad2 = false;
  salad3 = false;
  double = false;
  
  constructor(private route: ActivatedRoute, private menuComponent: MenuComponent, private router: Router) { }

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
  saladVolume(): string {
    if(this.saladCount() == 2 || this.double){
      return "~700ml";
    }
    else if(this.saladCount() == 1){
      return "~350ml";
    }
    
    return "";
  }
  total(): number {
    let p = this.saladPrice();
    for(let i of this.day.snacks1){
      p = i.checked? p+i.price:p;
    }
    for(let i of this.day.snacks2){
      p = i.checked? p+i.price:p;
    }
    for(let i of this.day.snacks3){
      p = i.checked? p+i.price:p;
    }
    
    return p;
  }
  saladPrice(): number {
    let p = 0;
    
    if(this.salad1)
      p = this.day.option1.price;

  
    if(this.salad2)
      p = p>0? p+(this.day.option2.price/2):this.day.option2.price;

     
    if(this.salad3)
      p = p>0? p+(this.day.option3.price/2):this.day.option3.price;

    if(this.double)
      p += p/2;
    
    return p;
  }
  goBack(): void {
    console.log('go back');
    this.router.navigate(['/dashboard'], {fragment: 'cardapio'});
  }
}
