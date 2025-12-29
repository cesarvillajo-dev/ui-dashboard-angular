import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LandingStateService {

  private readonly KEY = 'c-dashboard-landing-visited';

  hasVisited(): boolean {
    return sessionStorage.getItem(this.KEY) === 'true';
  }

  markVisited(): void {
    sessionStorage.setItem(this.KEY, 'true');
  }

  reset(): void {
    sessionStorage.removeItem(this.KEY);
  }
}
