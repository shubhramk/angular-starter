import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header.component';
import { SharedModule } from 'src/app/shared';
import { RouterModule } from '@angular/router';


@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    SharedModule
  ],
  declarations: [
    HeaderComponent
  ],
  entryComponents: [],
  exports: [HeaderComponent]
})
export class HeaderModule {
  static forRoot(): ModuleWithProviders<HeaderModule> {
    return {
      ngModule: HeaderModule
    };
  }
}
