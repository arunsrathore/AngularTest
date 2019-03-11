import { Component, OnInit } from '@angular/core';
import { RequestServiceService } from '../services/request-service.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  userList: any;
  constructor(private requestService: RequestServiceService) { }

  ngOnInit() {
    this.getUsers();
  }

  getUsers() {
    this.requestService.getUsers().subscribe(data => {
      this.userList = data.json();
    });
  };

}
