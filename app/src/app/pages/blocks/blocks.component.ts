import { Component } from '@angular/core';
import { PagesComponent} from '../../shared/layout/pages/pages.component';
import { PageTab } from '../../shared/layout/pages/page-tab.model';

@Component({
  selector: 'app-blocks',
  standalone: true,
  imports: [PagesComponent],
  templateUrl: './blocks.component.html',
  styleUrls: ['./blocks.component.scss'],
})
export class BlocksComponent {

  tabs: PageTab[] = [
    { id: 'overview', label: 'Overview' },
    { id: 'api', label: 'API' },
    { id: 'theming', label: 'Theming' },
    { id: 'examples', label: 'Examples' },
  ];

  filler = Array.from({ length: 20 }, (_, i) => i);
}


