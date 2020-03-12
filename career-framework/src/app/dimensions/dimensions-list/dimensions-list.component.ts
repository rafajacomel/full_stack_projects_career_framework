import { Component, OnInit } from '@angular/core';
import { Dimension } from '../dimension.model';
import { DimensionService } from '../dimension.service';

@Component({
  selector: 'app-dimensions-list',
  templateUrl: './dimensions-list.component.html',
  styleUrls: ['./dimensions-list.component.css']
})
export class DimensionsListComponent implements OnInit {
  dimensions: Dimension[];

  constructor(private dimensionService: DimensionService) { }

  ngOnInit() {
    this.dimensions = this.dimensionService.getDimensions();
  }

}
