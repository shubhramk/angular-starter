import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouteDetailComponent } from './route-detail/route-detail.component';
import { SharedModule } from 'src/app/shared';
import { RouteDetailRouting } from './route-detail/route-detail.routing';



@NgModule({
  declarations: [
    RouteDetailComponent
  ],
  imports: [
    CommonModule,
    RouteDetailRouting,
    SharedModule
  ]
})
export class RouteDetailModule { }
