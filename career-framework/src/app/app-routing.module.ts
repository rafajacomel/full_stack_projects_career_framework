import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DimensionsComponent } from './dimensions/dimensions.component';
import { DimensionStartComponent } from './dimensions/dimension-start/dimension-start.component';
import { DimensionsDetailsComponent } from './dimensions/dimensions-details/dimensions-details.component';

const appRoutes: Routes = [
  { path: '', redirectTo: '/dimensions', pathMatch: 'full' },
    { path: 'dimensions', component: DimensionsComponent , children: [
    { path: '', component: DimensionStartComponent },
    { path: ':id', component: DimensionsDetailsComponent },
  ] },
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}

