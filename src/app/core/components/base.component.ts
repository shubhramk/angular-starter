import { Component } from '@angular/core';
import { BaseService } from './../services/base.service';


@Component({
  selector: 'app-base',
  template: ``,
})
export class BaseComponent {
  constructor(protected _baseService: BaseService) {}

}

