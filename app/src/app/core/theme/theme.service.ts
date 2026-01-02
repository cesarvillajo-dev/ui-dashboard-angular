import { Injectable } from '@angular/core';

export type ThemeMode = 'light' | 'dark';

@Injectable({
  providedIn: 'root',
})
export class ThemeService {

  private readonly STORAGE_KEY = 'c-dashboard-theme';

  /**
   * Inicializa el tema de la aplicación.
   * Se llama una sola vez al arrancar la app.
   */
  init(): void {
    const saved = this.getSavedMode();
    this.apply(saved);
  }

  /**
   * Establece explícitamente el modo de tema.
   */
  setMode(mode: ThemeMode): void {
    localStorage.setItem(this.STORAGE_KEY, mode);
    this.apply(mode);
  }

  /**
   * Devuelve el modo de tema actual persistido.
   */
  getMode(): ThemeMode {
    return this.getSavedMode();
  }

  /**
   * Obtiene el modo guardado o devuelve el modo por defecto.
   */
  private getSavedMode(): ThemeMode {
    const stored = localStorage.getItem(this.STORAGE_KEY);
    return stored === 'dark' ? 'dark' : 'light';
  }

  /**
   * Aplica el tema al documento.
   */
  private apply(mode: ThemeMode): void {
    const root = document.documentElement;

    root.classList.remove('light', 'dark');
    root.classList.add(mode);
  }
}
