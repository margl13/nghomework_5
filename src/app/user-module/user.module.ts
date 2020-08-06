import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {AllUsersComponent} from './all-users/all-users.component';
import {UserService} from './user.service';
import {RouterModule} from '@angular/router';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import {UserComponent} from './user/user.component';
import {PostComponent} from './post/post.component';
import {PostService} from './post.service';



@NgModule({
  declarations: [
    AllUsersComponent,
    UserComponent,
    PostComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
        {path: '', component: AllUsersComponent,
          children: [
            {path: 'showUser/:id', component: UserComponent}
          ]
        }
      ],
    ),
    HttpClientModule,
    FormsModule
  ],
  providers: [UserService, PostService]
})
export class UserModule { }
