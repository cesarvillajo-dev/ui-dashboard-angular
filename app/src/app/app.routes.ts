import { Routes } from '@angular/router';

// Layouts
import { BaseLayoutComponent } from './layouts/base-layout/base-layout.component';
import { DashboardLayoutComponent } from './layouts/dashboard-layout/dashboard-layout.component';

// Landing / Home
import { LandingComponent } from './pages/landing/landing.component';

// Components
import { ComponentsComponent } from './pages/components/components.component';
import { ComponentsIndexComponent } from './pages/components/index/components-index.component';
import { ComponentsDetailComponent } from './pages/components/detail/components-detail.component';

// Blocks
import { BlocksComponent } from './pages/blocks/blocks.component';
// Styles
import { StylesComponent } from './pages/styles/styles.component';
// Wiki
import { WikiComponent } from './pages/wiki/wiki.component';

export const routes: Routes = [

  /* =====================================================
     LANDING — SOLO /
     ===================================================== */
  {
    path: '',
    component: BaseLayoutComponent,
    pathMatch: 'full',
    children: [
      {
        path: '',
        component: LandingComponent,
      },
    ],
  },

  /* =====================================================
     DASHBOARD — TODAS LAS SECCIONES
     ===================================================== */
  {
    path: '',
    component: DashboardLayoutComponent,
    children: [

      // COMPONENTS
      {
        path: 'components',
        component: ComponentsComponent,
        children: [
          { path: '', component: ComponentsIndexComponent },
          { path: ':slug', component: ComponentsDetailComponent },
        ],
      },

      // BLOCKS
      {
        path: 'blocks',
        component: BlocksComponent,
      },

      // STYLES
      {
        path: 'styles',
        component: StylesComponent,
      },

      // WIKI
      {
        path: 'wiki',
        component: WikiComponent,
      },
    ],
  },

  /* =====================================================
     FALLBACK
     ===================================================== */
  {
    path: '**',
    redirectTo: '',
  },
];
