import { Component, Input } from '@angular/core';
import { User } from 'src/app/interfaces/User';

@Component({
  selector: 'app-header-profile',
  templateUrl: './header-profile.component.html',
  styleUrls: ['./header-profile.component.scss'],
})
export class HeaderProfileComponent {
  @Input() user!: User;
}
