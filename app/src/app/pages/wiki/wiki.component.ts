// import { Component } from '@angular/core';

// @Component({
//   standalone: true,
//   selector: 'app-guides',
//   template: `
//     <h1>Guides</h1>
//     <p>Contenido de prueba para la sección Guides.</p>
//   `,
// })
// export class WikiComponent {}


// import { Component } from '@angular/core';

// @Component({
//   standalone: true,
//   selector: 'app-pages',
//   templateUrl: './pages.component.html',
//   styleUrls: ['./pages.component.scss'],
// })
// export class PagesComponent {}


import { Component } from '@angular/core';
import { PagesComponent} from '../../shared/layout/pages/pages.component';
import { PageTab } from '../../shared/layout/pages/page-tab.model';

@Component({
  selector: 'app-wiki',
  standalone: true,
  imports: [PagesComponent],
  templateUrl: './wiki.component.html',
  styleUrls: ['./wiki.component.scss'],
})
export class WikiComponent {
  tabs: PageTab[] = [
    { id: 'overview', label: 'Overview' },
    { id: 'api', label: 'API' },
    { id: 'theming', label: 'Theming' },
    { id: 'examples', label: 'Examples' },
  ];

   filler = Array.from({ length: 20 }, (_, i) => i);
}

