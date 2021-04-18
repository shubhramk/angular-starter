import { NgModule } from "@angular/core";
import { BingMapComponent } from "./components/bing-map.component";
import { WINDOW_PROVIDERS } from "./services/window.service";
import { BingApiLoaderService } from "./services/bing-api-loader.service";
import { JqxwidgetModule } from "./modules/jqxwidget/jqxwidget.module";

@NgModule({
  imports: [
    JqxwidgetModule
  ],
  declarations: [
    BingMapComponent
  ],
  providers: [
     WINDOW_PROVIDERS, BingApiLoaderService
  ],
  entryComponents: [],
  exports: [
    JqxwidgetModule,
    BingMapComponent
  ]
})
export class SharedModule { }
