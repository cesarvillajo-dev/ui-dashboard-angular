// import { Component } from '@angular/core';
// import { CommonModule } from '@angular/common';
// import { PagesComponent } from '../pages.component';

// @Component({
//   standalone: true,
//   selector: 'app-home',
//   imports: [CommonModule, PagesComponent],
//   templateUrl: './home.component.html',
//   styleUrls: ['./home.component.scss'],
// })
// export class HomeComponent {


//   activeTab: 'descripcion' | 'api' | 'ejemplos' = 'descripcion';
//   filler = Array.from({ length: 30 });

  
// }


import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: true,
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {}
