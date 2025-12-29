import { Component, EventEmitter, Input, Output } from '@angular/core';
import { PageTab } from './page-tab.model';
import { PageSection } from './page-section.model';

@Component({
  selector: 'app-pages',
  standalone: true,
  templateUrl: './pages.component.html',
  styleUrls: ['./pages.component.scss'],
})
export class PagesComponent {

  @Input() title = '';
  @Input() tabs: PageTab[] = [];
  @Input() activeTabId!: string;

  @Input() sections: PageSection[] = [];
  @Input() activeSectionId: string | null = null;

  @Output() tabChange = new EventEmitter<string>();
  @Output() sectionClick = new EventEmitter<string>();

  onTabClick(tabId: string): void {
    this.tabChange.emit(tabId);
  }

  onSectionClick(sectionId: string): void {
    this.sectionClick.emit(sectionId);
  }

  isSectionActive(id: string): boolean {
    return this.activeSectionId === id;
  }
}
