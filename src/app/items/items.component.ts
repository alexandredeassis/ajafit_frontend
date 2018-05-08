import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {Item} from './item';
import {ItemsService} from '../items.service';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css']
})
export class ItemsComponent implements OnInit {

  item: Item;

  items: Item[];

  getItems(): void {
    
  }
  onSelect(item: Item){
    this.item=item;
  }
  constructor(private itemsService: ItemsService) { }

  ngOnInit() {
    this.getItems();
  }

}
