import { Component, OnInit } from '@angular/core';

import { ActivatedRoute } from '@angular/router';
import 'rxjs/add/operator/filter';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  order: string;
  order1: Object;
  constructor(private route: ActivatedRoute) { }

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
  }
  

}
