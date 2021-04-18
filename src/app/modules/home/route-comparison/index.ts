import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared';
import { RouteComparisonRouting } from './route-comparison/route-comparison.routing';
import { RouteComparisonComponent } from './route-comparison/route-comparison.component';



@NgModule({
  declarations: [
    RouteComparisonComponent
  ],
  imports: [
    CommonModule,
    RouteComparisonRouting,
    SharedModule
  ]
})
export class RouteComparisonModule { }
