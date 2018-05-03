import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {ItemsComponent} from './items/items.component';
import {OrdersComponent} from './orders/orders.component';

import {MenuComponent} from './menu/menu.component';

const routes: Routes = [{
  path: 'items',
  component: ItemsComponent
},{
  path: 'orders',
  component: OrdersComponent
},{
  path: 'menu',
  component: MenuComponent
}
]

@NgModule({
  exports: [
    RouterModule
  ],
  imports: [ 
    RouterModule.forRoot(routes)
  ],
  declarations: []
})
export class AppRountingModule { }
