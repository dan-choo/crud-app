import { Component, OnInit } from '@angular/core';
import { UsersService } from '../users.service';
import { User } from '../user';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  user: User;
  users: User[];

  constructor(
    private userService: UsersService,
  ) {
    this.user = new User();
    this.users = [];
   }

  refreshList() {
    this.userService.findAll().subscribe(data => {
      this.users = data;
    })
  }

  onSubmit() {
    console.log(this.user);
    this.userService.save(this.user).subscribe(data => {
      console.log(data);
      this.refreshList();
    });
  }

  ngOnInit(): void {
    this.refreshList();
  }
}
