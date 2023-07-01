import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IndexResponse, User } from '../interfaces/User';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TwitchService {
  private readonly url = 'https://api.twitch.tv/helix';
  public user!: User;

  constructor(private httpClient: HttpClient) {}

  public getMyChannels = (userId: string) => {
    return this.httpClient
      .get<IndexResponse<any>>(
        `${this.url}/channels/followed?user_id=${userId}`
      )
      .pipe(map((response) => response.data));
  };

  public getMyProfile = (): Observable<User> => {
    return this.httpClient
      .get<IndexResponse<User>>(`${this.url}/users`)
      .pipe(map(({ data }) => data[0]))
      .pipe(
        map((user) => {
          this.setLoggedUser(user);
          return user;
        })
      );
  };

  public setLoggedUser = (user: User) => {
    this.user = user;
  };

  public hasLoggedUser = (): boolean => !!this.user;
}
