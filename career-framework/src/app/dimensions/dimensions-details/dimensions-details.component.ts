import { Component, OnInit, Input } from '@angular/core';

import { Dimension } from '../dimension.model';
import { DimensionService } from '../dimension.service'

@Component({
  selector: 'app-dimensions-details',
  templateUrl: './dimensions-details.component.html',
  styleUrls: ['./dimensions-details.component.css']
})
export class DimensionsDetailsComponent implements OnInit {
  @Input() dimension: Dimension;

  constructor(private dimensionService: DimensionService) { }

  ngOnInit(): void {
  }

}
