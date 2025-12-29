import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { ThemeService, ThemeMode } from '../theme/theme.service';
import { LandingStateService } from '../navigation/landing-state.service';

@Component({
  standalone: true,
  selector: 'app-topbar',
  imports: [RouterModule],
  templateUrl: './topbar.component.html',
  styleUrls: ['./topbar.component.scss'],
})
export class TopbarComponent {

  mode: ThemeMode;

  constructor(
    private router: Router,
    private landingState: LandingStateService,
    private theme: ThemeService
  ) {
    this.mode = this.theme.getMode();
  }

  goToLanding(): void {
    this.landingState.reset();
    this.router.navigateByUrl('/');
  }

  toggleTheme(): void {
    const next = this.mode === 'light'
      ? 'dark'
      : this.mode === 'dark'
        ? 'system'
        : 'light';

    this.mode = next;
    this.theme.setMode(next);
  }
}
