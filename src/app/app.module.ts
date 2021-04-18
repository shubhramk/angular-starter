import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CoreModule } from './core';


import { AppComponent } from './app.component';
import { DashBoardComponent } from './modules/dashboard/dashboard.component';
import { HomeComponent } from './modules/home/home.component';
@NgModule({
  declarations: [
    AppComponent,
    DashBoardComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    CoreModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
