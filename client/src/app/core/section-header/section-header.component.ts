import { Component } from '@angular/core';
import { BreadcrumbService, BreadcrumbComponent } from 'xng-breadcrumb';
import { CommonModule, TitleCasePipe } from '@angular/common';
import { toSignal } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-section-header',
  standalone: true,
  imports: [CommonModule, BreadcrumbComponent, TitleCasePipe],
  templateUrl: './section-header.component.html'
})
export class SectionHeaderComponent {
  readonly breadcrumb = toSignal(this.breadcrumbService.breadcrumbs$, { initialValue: [] as any[] });

  constructor(private breadcrumbService: BreadcrumbService) { }
}
