import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { DimensionsComponent } from './dimensions/dimensions.component';
import { DimensionsListComponent } from './dimensions/dimensions-list/dimensions-list.component';
import { DimensionsDetailsComponent } from './dimensions/dimensions-details/dimensions-details.component';
import { DimensionItemComponent } from './dimensions/dimensions-list/dimension-item/dimension-item.component';
import { AppRoutingModule } from './app-routing.module';
import { DimensionStartComponent } from './dimensions/dimension-start/dimension-start.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    DimensionsComponent,
    DimensionsListComponent,
    DimensionsDetailsComponent,
    DimensionItemComponent,
    DimensionStartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
