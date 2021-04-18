
import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RouteDetailComponent } from './route-detail.component';


const RouteDetailRoutes: Routes = [
  {
    path: '',
    component: RouteDetailComponent,
    data: { menuID: 'ROUTE_DETAIL'},
  }
];

export const RouteDetailRouting: ModuleWithProviders<RouterModule> = RouterModule.forChild(RouteDetailRoutes);
