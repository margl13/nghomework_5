import {Component, Input, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {IPost} from '../IPost';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent {

  @Input()
  post: IPost;
  constructor(private httpClient: HttpClient) { }
}
