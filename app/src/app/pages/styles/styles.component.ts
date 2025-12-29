import { Component } from '@angular/core';
import { PagesComponent} from '../../shared/layout/pages/pages.component';
import { PageTab } from '../../shared/layout/pages/page-tab.model';

@Component({
  selector: 'app-styles',
  standalone: true,
  imports: [PagesComponent],
  templateUrl: './styles.component.html',
  styleUrls: ['./styles.component.scss'],
})
export class StylesComponent {

  tabs: PageTab[] = [
    { id: 'overview', label: 'Overview' },
    { id: 'api', label: 'API' },
    { id: 'theming', label: 'Theming' },
    { id: 'examples', label: 'Examples' },
  ];

   filler = Array.from({ length: 20 }, (_, i) => i);
}
