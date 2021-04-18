import { Component } from '@angular/core';
import { LoaderService } from './core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Application';
  constructor(public loaderService:LoaderService){

  }
  
}
