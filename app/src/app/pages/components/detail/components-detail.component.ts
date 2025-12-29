import {
  AfterViewInit,
  Component,
  ElementRef,
  QueryList,
  ViewChildren,
} from '@angular/core';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';

import { PagesComponent } from '../../../shared/layout/pages/pages.component';
import { PageTab } from '../../../shared/layout/pages/page-tab.model';
import { PageSection } from '../../../shared/layout/pages/page-section.model';

import { COMPONENTS_DATA } from '../data/components.data';
import { ComponentEntry } from '../model/component-entry.model';

@Component({
  selector: 'app-components-detail',
  standalone: true,
  imports: [
    RouterModule,
    PagesComponent,
  ],
  templateUrl: './components-detail.component.html',
  styleUrls: ['./components-detail.component.scss'],
})
export class ComponentsDetailComponent implements AfterViewInit {

  readonly tabs: PageTab[] = [
    { id: 'overview', label: 'Overview' },
    { id: 'api', label: 'API' },
    { id: 'theming', label: 'Theming' },
    { id: 'examples', label: 'Examples' },
  ];

  activeTabId: PageTab['id'] = 'overview';
  activeSectionId: string | null = null;

  component!: ComponentEntry;

  readonly sectionsByTab: Record<PageTab['id'], PageSection[]> = {
    overview: [
      { id: 'usage', label: 'Usage' },
      { id: 'variants', label: 'Variants' },
      { id: 'sizes', label: 'Sizes' },
    ],
    api: [
      { id: 'inputs', label: 'Inputs' },
      { id: 'outputs', label: 'Outputs' },
    ],
    theming: [
      { id: 'css-vars', label: 'CSS Variables' },
      { id: 'scss-mixins', label: 'SCSS Mixins' },
    ],
    examples: [
      { id: 'basic', label: 'Basic examples' },
    ],
  };

  @ViewChildren('pageSection', { read: ElementRef })
  private pageSections!: QueryList<ElementRef<HTMLElement>>;

  private observer?: IntersectionObserver;

  // 🔒 lock para scroll programático
  private isAutoScrolling = false;
  private autoScrollTimeout?: number;

  constructor(
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.route.paramMap.subscribe(params => {
      const slug = params.get('slug');
      const entry = COMPONENTS_DATA.find(c => c.slug === slug);
      if (!entry) {
        throw new Error(`Component not found: ${slug}`);
      }
      this.component = entry;
    });

    this.route.queryParamMap.subscribe(params => {
      const tab = params.get('tab') as PageTab['id'] | null;
      this.activeTabId = this.tabs.some(t => t.id === tab) ? tab! : 'overview';
    });
  }

  ngAfterViewInit(): void {
    this.initScrollSpy();
  }

  get sectionsForTab(): PageSection[] {
    return this.sectionsByTab[this.activeTabId] ?? [];
  }

  onTabChange(tabId: string): void {
    this.router.navigate([], {
      relativeTo: this.route,
      queryParams: { tab: tabId },
      queryParamsHandling: 'merge',
    });
  }

  onSectionClick(sectionId: string): void {
    // 🔒 activamos lock
    this.isAutoScrolling = true;
    this.activeSectionId = sectionId;

    window.clearTimeout(this.autoScrollTimeout);

    document
      .getElementById(sectionId)
      ?.scrollIntoView({ behavior: 'smooth', block: 'start' });

    // ⏱ liberamos lock tras animación
    this.autoScrollTimeout = window.setTimeout(() => {
      this.isAutoScrolling = false;
    }, 500);
  }

  private initScrollSpy(): void {
    this.observer?.disconnect();

    this.observer = new IntersectionObserver(
      entries => {
        //  ignorar eventos durante scroll programático
        if (this.isAutoScrolling) return;

        const visibles = entries
          .filter(e => e.isIntersecting)
          .map(e => ({
            id: e.target.id,
            distance: Math.abs(e.boundingClientRect.top),
          }))
          .sort((a, b) => a.distance - b.distance);

        if (visibles.length) {
          this.activeSectionId = visibles[0].id;
        }
      },
      {
        root: null,
        threshold: [0, 0.25, 0.5],
      }
    );

    this.pageSections.forEach(section =>
      this.observer!.observe(section.nativeElement)
    );
  }
}
