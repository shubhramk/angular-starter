import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { LoaderService } from './services/loader.service';
import { LoaderInterceptor } from './interceptors/loader.interceptor';
import { HttpInterceptorClass } from './interceptors/http.interceptor';
import { HeaderModule } from './modules/header/header.module';
import { BaseService } from './services/base.service';
import { BaseComponent } from './components/base.component';
import { PipesModule } from './pipes/pipes.module';
import { BroadcastService } from './services/broadcaster.service';
import { HttpService } from './services/http.service';
import { LocalStorageService } from './services/local-storage.service';
import { AppRoutingModule } from './routing/app-routing.module';
import { GlobalErrorHandler } from './services/error.handler.service';


@NgModule({
    imports: [
      HeaderModule,
      PipesModule,
      AppRoutingModule,
      HttpClientModule
    ],
    declarations: [
      BaseComponent
    ],
    providers: [
      BaseService,
      BroadcastService,
      GlobalErrorHandler,
      HttpService,
      LoaderService,
      LocalStorageService,
      { provide: HTTP_INTERCEPTORS, useClass: HttpInterceptorClass, multi: true },
      { provide: HTTP_INTERCEPTORS, useClass: LoaderInterceptor,multi: true}
    ],
    exports:[
      HeaderModule,
      PipesModule,
      AppRoutingModule,
      BaseComponent
    ]
})
export class CoreModule {
}

export * from './services/loader.service';
export * from './services/base.service';
export * from './services/broadcaster.service';
export * from './services/error.handler.service';
export * from './services/http.service';
export * from './services/local-storage.service';