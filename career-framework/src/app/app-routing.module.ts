import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DimensionsComponent } from './dimensions/dimensions.component';
import { DimensionStartComponent } from './dimensions/dimension-start/dimension-start.component';
import { DimensionsDetailsComponent } from './dimensions/dimensions-details/dimensions-details.component';
import { DimensionEditComponent } from './dimensions/dimension-edit/dimension-edit.component';

const appRoutes: Routes = [
  { path: '', redirectTo: '/dimensions', pathMatch: 'full' },
    { path: 'dimensions', component: DimensionsComponent , children: [
    { path: '', component: DimensionStartComponent },
    { path: ':id', component: DimensionsDetailsComponent },
    { path: ':id/edit', component: DimensionEditComponent },


  ] },
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}

