import { Component, OnInit } from '@angular/core';
import { Dimension } from '../dimension.model';
import { DimensionService } from '../dimension.service';
import { Router, ActivatedRoute } from '@angular/router';
import { ManageDimensionsServicesService} from '../service/data/manage-dimensions-services.service'


@Component({
  selector: 'app-dimensions-list',
  templateUrl: './dimensions-list.component.html',
  styleUrls: ['./dimensions-list.component.css']
})
export class DimensionsListComponent implements OnInit {
  dimensions: Dimension[];
  welcomeMessageFromService:string;

  constructor(private dimensionService: DimensionService,
    private manageDimensionsServicesService: ManageDimensionsServicesService,
      private router: Router,
      private route: ActivatedRoute) {
       }

  ngOnInit() {
    this.dimensions = this.dimensionService.getDimensions();
  }

}
