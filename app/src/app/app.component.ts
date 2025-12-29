// import { Component } from '@angular/core';
// import { RouterOutlet } from '@angular/router';

// import { TopbarComponent } from './core/topbar/topbar.component';
// import { SidebarComponent } from './core/sidebar/sidebar.component';

// @Component({
//   selector: 'app-root',
//   standalone: true,
//   imports: [
//     RouterOutlet,
//     TopbarComponent,
//     SidebarComponent
//   ],
//   templateUrl: './app.component.html',
//   styleUrls: ['./app.component.scss'],
// })
// export class AppComponent {

//   private readonly VISITED_KEY = 'c-cesardev-visited';

//   constructor(private router: Router) {
//     const visited = sessionStorage.getItem(this.VISITED_KEY);

//     if (!visited) {
//       sessionStorage.setItem(this.VISITED_KEY, 'true');
//       this.router.navigateByUrl('/');
//     }
//   }

//   goToLanding() {
//     this.router.navigateByUrl('/');
//   }

// }

import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {}

