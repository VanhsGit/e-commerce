import { Component, Input, Output, EventEmitter, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-pager',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './pager.component.html'
})
export class PagerComponent implements OnInit, OnChanges {
  @Input() totalCount: number = 0;
  @Input() pageSize: number = 10;
  @Output() pageChanged = new EventEmitter<number>();

  currentPage = 1;
  totalPages = 1;
  pages: number[] = [];

  constructor() { }

  ngOnInit(): void {
    this.updatePagination();
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.updatePagination();
  }

  updatePagination(): void {
    this.totalPages = Math.max(1, Math.ceil((this.totalCount || 0) / (this.pageSize || 1)));
    this.currentPage = Math.min(this.currentPage, this.totalPages);
    this.pages = Array.from({ length: this.totalPages }, (_, index) => index + 1);
  }

  onPagerChanged(page: number): void {
    if (page < 1 || page > this.totalPages) {
      return;
    }

    this.currentPage = page;
    this.pageChanged.emit(page);
  }
}

