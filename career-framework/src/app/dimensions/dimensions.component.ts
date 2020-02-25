import { Component, OnInit } from '@angular/core';
import { Dimension } from './dimension.model';

@Component({
  selector: 'app-dimensions',
  templateUrl: './dimensions.component.html',
  styleUrls: ['./dimensions.component.css']
})
export class DimensionsComponent implements OnInit {
  selectedDimension: Dimension;

  constructor() { }

  ngOnInit(): void {
  }

}
