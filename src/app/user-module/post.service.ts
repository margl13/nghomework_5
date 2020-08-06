import { Injectable } from '@angular/core';
import {IPost} from './IPost';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private httpClient: HttpClient) { }

  getPosts(id: number): Observable<IPost[]> {
    return this.httpClient.get<IPost[]>(`http://jsonplaceholder.typicode.com/posts?userId=${id}`);
  }
}

