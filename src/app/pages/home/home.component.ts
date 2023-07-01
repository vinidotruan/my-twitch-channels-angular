import { Component } from '@angular/core';
import { User } from 'src/app/interfaces/User';
import { TwitchService } from 'src/app/services/twitch.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  public user!: User;
  public channels$: any;

  constructor(private twitchService: TwitchService) {
    if (!twitchService.hasLoggedUser()) {
      this.getMyProfile();
    }
  }

  public getMyProfile = () => {
    this.twitchService.getMyProfile().subscribe({
      next: (response) => {
        this.user = response;
        this.channels$ = this.twitchService.getMyChannels(response.id);
      },
      error: (err) => console.log(err),
    });
  };
}
