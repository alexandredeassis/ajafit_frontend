import { Component, OnInit, Injectable } from '@angular/core';

import {User} from './user';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})

@Injectable()
export class UsersComponent implements OnInit {

  user: User;
  constructor() { 
    console.log('buuuuuuuuuuuuuu');
    this.ngOnInit();
  }

  ngOnInit() {
    console.log('xxxxxxxxxxxxxxxxxxxxxxxxx');
    this.user = new User();
    this.user.id=1;
    this.user.name='Alicia joaquim';
    this.user.phone='21988631842';
    this.user.descriptions='Menina de 7 anos.';
    console.log('users compoennt init.');
  }

  getUser(): User{
    console.log('alicia joaquim....')
    return this.user;
  }
}
