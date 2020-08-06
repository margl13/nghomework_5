import { Component } from '@angular/core';
import {UserService} from '../../user-module/user.service';
import {IUser} from '../../user-module/IUser';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor() {}
}
