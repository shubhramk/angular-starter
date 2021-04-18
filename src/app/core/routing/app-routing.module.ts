import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashBoardComponent } from 'src/app/modules/dashboard/dashboard.component';
import { HomeComponent } from 'src/app/modules/home/home.component';
import { AuthGuard } from '../gaurds/auth.gaurd';

const routes: Routes = [
  {
    path: '',
    component: DashBoardComponent,
    canActivate: [AuthGuard],
    data: { 'menuID': 'DASHBOARD' }
  },
  {
    path: 'Home',
    component: HomeComponent,
    children: [
      {
        path: 'RouteDetails',
        loadChildren: () => import('./../../modules/home/route-detail').then(m => m.RouteDetailModule),
        data: { menuID: 'ROUTE_DETAIL' }
      },
      {
        path: 'RouteComparison',
        loadChildren: () => import('./../../modules/home/route-comparison').then(m => m.RouteComparisonModule),
        data: { menuID: 'ROUTE_DETAIL' }
      }
    ]
  },
  {
    path: '**',
    redirectTo: ''
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
