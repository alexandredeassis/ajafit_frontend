import { Component, OnInit } from '@angular/core';

import { ActivatedRoute } from '@angular/router';
import 'rxjs/add/operator/filter';

import {UsersComponent} from '../users/users.component';
import {User} from '../users/user';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  order: string;
  order1: Object;
  user: User;

  constructor(private route: ActivatedRoute, private usersComponent: UsersComponent) { }

  ngOnInit() {
    console.log('testando...');
    this.route.queryParams
      .filter(params => params.order)
      .subscribe(params => {
        console.log(params); // {order: "popular"}

        this.order = params.order;
        console.log(this.order); // popular
      });

      this.route.queryParamMap.subscribe(params => {
        this.order1 = {...params.keys, ...params};
        this.order = JSON.stringify(this.order1);
        console.log('params:'+JSON.stringify(this.order1) );
      });
      this.user = this.usersComponent.getUser();
  }
  
  getUser(): User{
    console.log('oxi...'+this.user);
    return this.usersComponent.getUser();
  }

}
