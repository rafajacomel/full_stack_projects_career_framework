import { Component, OnInit } from '@angular/core';
import { Dimension } from './dimension.model';
import { DimensionService } from './dimension.service'

@Component({
  selector: 'app-dimensions',
  templateUrl: './dimensions.component.html',
  styleUrls: ['./dimensions.component.css'],
  providers: [DimensionService]
})
export class DimensionsComponent implements OnInit {
  selectedDimension: Dimension;

  constructor(private dimensionService: DimensionService) { }

  ngOnInit(): void {
    this.dimensionService.dimensionSelected
    .subscribe(
       (dimension: Dimension) => {
              this.selectedDimension = dimension;
                  }
      );
  }

}
