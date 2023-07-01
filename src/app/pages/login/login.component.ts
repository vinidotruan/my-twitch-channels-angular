import { Component, inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { environment } from 'src/environments/environment.development';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  constructor() {
    this.verifyFragmentInUri();
  }

  public openTwitchAuthorizeTab = () => {
    const params = `client_id=${environment.twitch_client_id}&response_type=token&redirect_uri=http://localhost:4200/login/&scope=user%3Aread%3Afollows`;
    window.open(`https://id.twitch.tv/oauth2/authorize?${params}`);
  };

  private verifyFragmentInUri = () => {
    const route = inject(ActivatedRoute);
    const router = inject(Router);
    route.fragment.subscribe((fragment) => {
      const hash = fragment?.split('#')[0];
      const params = hash?.split('&');
      const tokenParam = params?.find((param) =>
        param.startsWith('access_token=')
      );
      const token = tokenParam?.split('=')[1] ?? false;
      if (token) {
        localStorage.setItem('access_token', token);
        router.navigate(['/']);
      }
    });
  };
}
