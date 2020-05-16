import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { DimensionService } from '../dimension.service';
import { FormGroup, FormControl} from '@angular/forms';
import { Dimension } from '../dimension.model';

@Component({
  selector: 'app-dimension-edit',
  templateUrl: './dimension-edit.component.html',
  styleUrls: ['./dimension-edit.component.css']
})
export class DimensionEditComponent implements OnInit {
  id: number;
  dimensionForm: FormGroup;
  dimension: Dimension;

  constructor(private route: ActivatedRoute,
    private dimensionService: DimensionService,
    private router: Router) { }

  ngOnInit(): void {
  this.route.params
    .subscribe(
      (params: Params) => {
        this.id = +params['id'];
        this.dimension = this.dimensionService.getDimension(this.id);
        this.initForm();
      }
    );
  }

  private initForm() {
    let dimensionEvidences = '';
    const dimension = this.dimensionService.getDimension(this.id);
    dimensionEvidences = dimension.evidences;

    this.dimensionForm = new FormGroup({
      'evidences': new FormControl(dimensionEvidences),
    });
  }

  onSubmit() {
    this.dimensionService.updateDimension(this.id, this.dimensionForm.value.evidences);
  }

}
