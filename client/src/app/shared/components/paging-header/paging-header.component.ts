import { Component, OnInit, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-paging-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './paging-header.component.html'
})
export class PagingHeaderComponent implements OnInit {
  @Input() pageNumber: number = 1;
  @Input() pageSize: number = 10;
  @Input() totalCount: number = 0;

  constructor() { }

  ngOnInit(): void {
  }

}
