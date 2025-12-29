/**
 * ComponentsIndexComponent
 * ------------------------------------------------------
 * Vista índice del área Components.
 * Muestra un listado visual (cards) de todos los componentes
 * disponibles, sincronizado con el sidebar.
 *
 * Proyecto: c-dashboard
 * Autor: Cesar Villajo
 */

import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

import { COMPONENTS_DATA } from '../data/components.data';
import { ComponentEntry } from '../model/component-entry.model';

@Component({
  selector: 'app-components-index',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './components-index.component.html',
  styleUrls: ['./components-index.component.scss'],
})
export class ComponentsIndexComponent {

  readonly title = 'Components';

  readonly components: ComponentEntry[] = COMPONENTS_DATA;

}
