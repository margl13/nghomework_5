import { Component, OnInit } from '@angular/core';
import {IUser} from '../IUser';
import {UserService} from '../user.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-all-users',
  templateUrl: './all-users.component.html',
  styleUrls: ['./all-users.component.css']
})
export class AllUsersComponent {
  users: IUser[];
  selectedUser: number;

  constructor(private userService: UserService, private activatedRoute: ActivatedRoute, private router: Router) {
    this.userService.fetchUsers().subscribe(value => this.users = value);
  }

  selectUser(): void {
    console.log(this.selectedUser);
    console.log(this.router.url);
    const oneUser = this.users.find(value => value.id === +this.selectedUser);
    console.log(oneUser);
    this.router.navigate(['to-all-users', 'showUser', this.selectedUser], {state: oneUser});
  }
}
