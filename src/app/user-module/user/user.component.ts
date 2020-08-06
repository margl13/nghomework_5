import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {IUser} from '../IUser';
import {IPost} from '../IPost';
import {PostService} from '../post.service';


@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  user: IUser;
  posts: IPost;
  constructor(private router: Router, private activatedRoute: ActivatedRoute, private postService: PostService) {
    this.activatedRoute.params.subscribe(() => {
      this.user = this.router.getCurrentNavigation().extras.state as IUser;
      this.postService.getPosts(this.user.id).subscribe(value => {
        console.log(value);
      });
    });
  }
  ngOnInit(): void {
  }

}
