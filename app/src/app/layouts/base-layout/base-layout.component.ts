import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TopbarComponent } from '../../core/topbar/topbar.component';

@Component({
  selector: 'app-base-layout',
  standalone: true,
  imports: [
    RouterOutlet,
    TopbarComponent
  ],
  templateUrl: './base-layout.component.html',
  styleUrls: ['./base-layout.component.scss'],
})
export class BaseLayoutComponent {}
