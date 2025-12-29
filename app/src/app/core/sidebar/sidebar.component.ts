/**
 * SidebarComponent
 * ------------------------------------------------------
 * Sidebar contextual según el área activa (Components).
 *
 * Proyecto: c-dashboard
 * Autor: Cesar Villajo
 */

import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';

import { COMPONENTS_DATA } from '../../pages/components/data/components.data';
import { ComponentEntry } from '../../pages/components/model/component-entry.model';

@Component({
  standalone: true,
  selector: 'app-sidebar',
  imports: [RouterModule],
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent {

  readonly items: ComponentEntry[] = COMPONENTS_DATA;

  constructor(private router: Router) {}

  isActive(slug: string): boolean {
    return this.router.url.startsWith(`/components/${slug}`);
  }

}
