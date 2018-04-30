import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {ItemsComponent} from './items/items.component';
import {OrdersComponent} from './orders/orders.component';

const routes: Routes = [{
  path: 'items',
  component: ItemsComponent
},{
  path: 'orders',
  component: OrdersComponent
}]

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
