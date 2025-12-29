import { Injectable } from '@angular/core';

export type ThemeMode = 'light' | 'dark' | 'system';

@Injectable({
  providedIn: 'root',
})
export class ThemeService {

  private readonly STORAGE_KEY = 'c-dashboard-theme';

  private mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');

  init(): void {
    const saved = this.getSavedMode();
    this.apply(saved);

    // Escuchar cambios del sistema solo si el modo es system
    this.mediaQuery.addEventListener('change', () => {
      if (this.getSavedMode() === 'system') {
        this.apply('system');
      }
    });
  }

  setMode(mode: ThemeMode): void {
    localStorage.setItem(this.STORAGE_KEY, mode);
    this.apply(mode);
  }

  getMode(): ThemeMode {
    return this.getSavedMode();
  }

  private getSavedMode(): ThemeMode {
    return (localStorage.getItem(this.STORAGE_KEY) as ThemeMode) ?? 'system';
  }

  private apply(mode: ThemeMode): void {
    const root = document.documentElement;

    root.classList.remove('light', 'dark');

    if (mode === 'system') {
      const prefersDark = this.mediaQuery.matches;
      root.classList.add(prefersDark ? 'dark' : 'light');
    } else {
      root.classList.add(mode);
    }
  }
}
