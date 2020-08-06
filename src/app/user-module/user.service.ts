import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {IUser} from './IUser';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  users: IUser[];
  constructor(private httpClient: HttpClient) {}
  fetchUsers(): Observable<IUser[]> {
    return this.httpClient.get<IUser[]>('https://jsonplaceholder.typicode.com/users') ;
  }
  getUser(id: string): Observable<IUser> {
    return this.httpClient.get<IUser>(`https://jsonplaceholder.typicode.com/users/${id}`) ;
  }
}
