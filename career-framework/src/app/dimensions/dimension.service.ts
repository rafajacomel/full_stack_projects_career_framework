import { EventEmitter, Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http'

import { Dimension } from './dimension.model';
import { ManageDimensionsServicesService } from './service/data/manage-dimensions-services.service';

@Injectable()
export class DimensionService {
  dimensionsChanged = new Subject<Dimension[]>();
  dimensionDescriptions: String[]; 

  private dimensions: Dimension[] =  [
    new Dimension('Business Results', 
    'On this section you will input the achievements of your division in the company' + 
    ' like financial results, market share, etc.',''),
    new Dimension('Individual Achievements', 
    'On this section you will input the individual achievements like code delivered' +
    ' tests done, projects you participate, etc.', ''),
    new Dimension('Innovation',
    'On this section you will input the innovation you proposed to help in the project' +
    ' like automation of process, improvements, etc.', ''),
    new Dimension('Skills', 
    'On this section you will input what you learn in the period, courses technology etc.', 
    '' ),
    new Dimension('Responsability with Others', 
    'On this section you will input how you help others to achive objectves, mentoring, etc.',
    '')
  ];

  constructor(private manageDimensionsServicesService: ManageDimensionsServicesService,
    private http:HttpClient) {
  }

  getDimensions() {
     this.manageDimensionsServicesService.getDimensionsInfo().subscribe(
      response => {
        this.dimensionDescriptions = response;
        this.setDimensionsValues();
      }
    );

    return(this.dimensions.slice());
  }

  setDimensionsValues() {
    this.dimensions  = [
      new Dimension('Business Results', 
      'On this section you will input the achievements of your division in the company' + 
      ' like financial results, market share, etc.',this.dimensionDescriptions[0].valueOf()),
      new Dimension('Individual Achievements', 
      'On this section you will input the individual achievements like code delivered' +
      ' tests done, projects you participate, etc.', this.dimensionDescriptions[1].valueOf()),
      new Dimension('Innovation',
      'On this section you will input the innovation you proposed to help in the project' +
      ' like automation of process, improvements, etc.', this.dimensionDescriptions[2].valueOf()),
      new Dimension('Skills', 
      'On this section you will input what you learn in the period, courses technology etc.', 
      this.dimensionDescriptions[3].valueOf() ),
      new Dimension('Responsability with Others', 
      'On this section you will input how you help others to achive objectves, mentoring, etc.',
      this.dimensionDescriptions[4].valueOf())
    ];
  }

  getDimension(index: number) {
    return this.dimensions[index];
  }

  updateDimension(index: number, evidences: string) {
    this.dimensions[index] = new Dimension(this.dimensions[index].name,
      this.dimensions[index].description, evidences ),
    this.dimensionsChanged.next(this.dimensions.slice());
    this.http.put(`http://localhost:8090/getcareerinfo/${index}/${evidences}`,index).subscribe (
      data => console.log(data)
    )
  }

}

