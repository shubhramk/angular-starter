import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TruncatePipe } from './truncate.pipe';
import { FilterPipe } from './filter.pipe';
import { SearchFilterPipe } from './filter.pipe';
import { SafePipe } from './safe.pipe.';


@NgModule({
  imports: [CommonModule],
  declarations: [
    FilterPipe,
    SafePipe,
    SearchFilterPipe,
    TruncatePipe
  ],
  exports: [TruncatePipe, FilterPipe, SearchFilterPipe, SafePipe]
})
export class PipesModule {
  static forRoot(): ModuleWithProviders<PipesModule> {
    return {
      ngModule: PipesModule
    };
  }
}
