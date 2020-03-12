import { Component, OnInit, Input } from '@angular/core';

import { Dimension } from '../../dimension.model';
import { DimensionService } from '../../dimension.service'

@Component({
  selector: 'app-dimension-item',
  templateUrl: './dimension-item.component.html',
  styleUrls: ['./dimension-item.component.css']
})
export class DimensionItemComponent implements OnInit {
  @Input() dimension: Dimension;

  constructor(private dimensionService: DimensionService) { }

  ngOnInit() {
  }

  onSelected() {
    this.dimensionService.dimensionSelected.emit(this.dimension);
  }

}
