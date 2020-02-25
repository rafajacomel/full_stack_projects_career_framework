import { Component, OnInit, EventEmitter, Output } from '@angular/core';

import { Dimension } from '../dimension.model';

@Component({
  selector: 'app-dimensions-list',
  templateUrl: './dimensions-list.component.html',
  styleUrls: ['./dimensions-list.component.css']
})
export class DimensionsListComponent implements OnInit {
  @Output() dimensionWasSelected = new EventEmitter<Dimension>();
  dimensions: Dimension[] = [
    new Dimension('Business Results', 
    'On this section you will input the achievements of your division in the company' + 
    ' like financial results, market share, etc.'),
    new Dimension('Individual Achievements', 
    'On this section you will input the individual achievements like code delivered' +
    ' tests done, projects you participate, etc.' ),
    new Dimension('Innovation',
    'On this section you will input the innovation you proposed to help in the project' +
    ' like automation of process, improvements, etc.' ),
    new Dimension('Skills', 
    'On this section you will input what you learn in the period, courses technology etc.' ),
    new Dimension('Responsability with Others', 
    'On this section you will input how you help others to achive objectves, mentoring, etc.')
  ];

  constructor() { }

  ngOnInit(): void {
  }

  onDimensionSelected(dimension: Dimension) {
    this.dimensionWasSelected.emit(dimension);
   }

}
