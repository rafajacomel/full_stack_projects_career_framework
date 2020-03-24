import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Dimension } from '../dimension.model';
import { DimensionService } from '../dimension.service'

@Component({
  selector: 'app-dimensions-details',
  templateUrl: './dimensions-details.component.html',
  styleUrls: ['./dimensions-details.component.css']
})
export class DimensionsDetailsComponent implements OnInit {
  dimension: Dimension;
  id: number;

  constructor(private recipeService: DimensionService,
                private route: ActivatedRoute,
                private router: Router) {
    }

    ngOnInit() {
      this.route.params
            .subscribe(
              (params: Params) => {
                this.id = +params['id'];
                this.dimension = this.recipeService.getDimension(this.id);
              }
            );
         }

}
