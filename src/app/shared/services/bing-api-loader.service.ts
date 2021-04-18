import { Injectable, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { WINDOW } from './window.service';
import { ConstantConfig } from 'src/app/core/config/constant.config';

interface IBingMap {
  "__onBingLoaded" : ''
}
@Injectable({
  providedIn: 'root'
})
export class BingApiLoaderService {
  private promise!: Promise<unknown>;
  private url = ConstantConfig.BING_MAP_URL;

  constructor(@Inject(DOCUMENT) private _documentRef: Document, @Inject(WINDOW) private _windowRef: Window) {}

  onBingLoaded(){
    console.log('loaded')
  }

  public load() {
    // First time 'load' is called?
    if (!this.promise) {

        // Make promise to load
        this.promise = new Promise( resolve => {

            // Set callback for when bing maps is loaded.
            // this._windowRef['__onBingLoaded'] = () => {
            //     resolve('Bing Maps API loaded');
            // };

          

            // const node = document.createElement('script');
            const node = this._documentRef.createElement('script');
            node.src = this.url;
            node.type = 'text/javascript';
            node.async = true;
            node.defer = true;
            // _documentRef.getElementsByTagName('head')[0].appendChild(node);
            this._documentRef.getElementsByTagName('head')[0].appendChild(node);
            node.onload = ()=>{
              console.log(this._windowRef)
              resolve('Bing Maps API loaded');
            };
        });
    }

    // Always return promise. When 'load' is called many times, the promise is already resolved.
    return this.promise;
  }
}
