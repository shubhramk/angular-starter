
import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RouteComparisonComponent } from './route-comparison.component';


const RouteComparisonRoutes: Routes = [
  {
    path: '',
    component: RouteComparisonComponent,
    data: { menuID: 'ROUTE_COMPARISON'},
  }
];

export const RouteComparisonRouting: ModuleWithProviders<RouterModule> = RouterModule.forChild(RouteComparisonRoutes);
