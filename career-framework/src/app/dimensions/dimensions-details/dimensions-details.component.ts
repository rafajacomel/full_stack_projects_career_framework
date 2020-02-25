import { Component, OnInit, Input } from '@angular/core';

import { Dimension } from '../dimension.model';

@Component({
  selector: 'app-dimensions-details',
  templateUrl: './dimensions-details.component.html',
  styleUrls: ['./dimensions-details.component.css']
})
export class DimensionsDetailsComponent implements OnInit {
  @Input() dimension: Dimension;

  constructor() { }

  ngOnInit(): void {
  }

}
