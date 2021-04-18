import { Component, OnInit, OnDestroy } from '@angular/core';
import { BaseComponent } from 'src/app/core/components/base.component';
import { BaseService } from 'src/app/core/services/base.service';

@Component({
  selector: 'app-header',
  styleUrls: ['./header.component.scss'],
  templateUrl: './header.component.html'
})

/**
 * Class which provide header functionalities
 */
export class HeaderComponent extends BaseComponent implements OnInit, OnDestroy {
 
  constructor(
    protected _baseService: BaseService
  ) {
    super(_baseService);

  }

  ngOnInit() {
  }

  ngOnDestroy() {
   
  }
}
