import { Component, OnInit, Input } from '@angular/core';

import { Dimension } from '../../dimension.model';

@Component({
  selector: 'app-dimension-item',
  templateUrl: './dimension-item.component.html',
  styleUrls: ['./dimension-item.component.css']
})
export class DimensionItemComponent implements OnInit {
  @Input() dimension: Dimension;
  @Input() index: number;

  ngOnInit() {
  }
}
