import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ComponentsComponent } from './pages/components/components.component';
import { GuidesComponent } from './pages/guides/guides.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'components', component: ComponentsComponent },
  { path: 'guides', component: GuidesComponent },
];
