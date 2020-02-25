import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

import { Dimension } from '../../dimension.model';

@Component({
  selector: 'app-dimension-item',
  templateUrl: './dimension-item.component.html',
  styleUrls: ['./dimension-item.component.css']
})
export class DimensionItemComponent implements OnInit {
  @Input() dimensions: Dimension;
  @Output() dimensionSelected = new EventEmitter<void>();

  constructor() { }

  ngOnInit() {
  }

  onSelected() {
    this.dimensionSelected.emit();
  }

}
