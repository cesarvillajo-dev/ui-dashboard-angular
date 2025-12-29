import { Routes } from '@angular/router';

// Layouts
import { BaseLayoutComponent } from './layouts/base-layout/base-layout.component';
import { DashboardLayoutComponent } from './layouts/dashboard-layout/dashboard-layout.component';

// Landing / Home
import { LandingComponent } from './pages/landing/landing.component';
import { HomeComponent } from './pages/home/home.component';

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

  /* =========================================================
     LANDING (SIN SIDEBAR · SIN DASHBOARD)
     ========================================================= */
  {
    path: '',
    component: BaseLayoutComponent,
    children: [
      {
        path: '',
        component: LandingComponent,
      },
    ],
  },

  /* =========================================================
     DASHBOARD (TOPBAR FIJO + SIDEBAR)
     ========================================================= */
  {
    path: '',
    component: DashboardLayoutComponent,
    children: [

      /* ---------- HOME ---------- */
      {
        path: 'home',
        component: HomeComponent,
      },

      /* =====================================================
         COMPONENTS
         ===================================================== */
      {
        path: 'components',
        component: ComponentsComponent,
        children: [
          {
            path: '',
            component: ComponentsIndexComponent,
          },
          {
            path: ':slug',
            component: ComponentsDetailComponent,
          },
        ],
      },

      /* =====================================================
         BLOCKS
         (estructura simple por ahora, ampliable después)
         ===================================================== */
      {
        path: 'blocks',
        component: BlocksComponent,
      },

      /* =====================================================
         STYLES
         ===================================================== */
      {
        path: 'styles',
        component: StylesComponent,
      },

      /* =====================================================
         WIKI
         ===================================================== */
      {
        path: 'wiki',
        component: WikiComponent,
      },
    ],
  },

  /* =========================================================
     FALLBACK
     ========================================================= */
  {
    path: '**',
    redirectTo: '',
  },
];
