import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({ providedIn: 'root' })
export class LandingStateService {

  private readonly KEY = 'hasVisited';

  constructor(private router: Router) {}

  /** Solo se llama al entrar en "/" */
  checkLanding(): void {
    const visited = sessionStorage.getItem(this.KEY);

    if (!visited) {
      sessionStorage.setItem(this.KEY, 'true');
      return;
    }
  }

  /** Solo se llama explícitamente desde el logo */
  reset(): void {
    sessionStorage.removeItem(this.KEY);
  }

  /** 🔒 Protección crítica */
  isRootUrl(): boolean {
    return this.router.url === '/' || this.router.url === '';
  }
}
