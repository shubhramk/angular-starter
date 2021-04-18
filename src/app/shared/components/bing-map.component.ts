import { AfterViewInit, Component, ElementRef, Input, OnChanges, ViewChild } from '@angular/core';
import { ConstantConfig } from 'src/app/core/config/constant.config';


@Component({
  selector: 'bing-map',
  templateUrl: 'bing-map.component.html',
  styles: [``]
})
export class BingMapComponent implements OnChanges, AfterViewInit  {

  @ViewChild('streetsideMap')
  streetsideMapViewChild!: ElementRef;
  streetsideMap!: Microsoft.Maps.Map;

  constructor() {
    
  }

  ngOnChanges() {
    
  }

  ngAfterViewInit() {
    this.createStreetSideMap();
  }

  createStreetSideMap() {
    this.streetsideMap = new Microsoft.Maps.Map(
      this.streetsideMapViewChild.nativeElement,
      {
        credentials:ConstantConfig.BING_MAP_KEY,
        mapTypeId: Microsoft.Maps.MapTypeId.streetside,
        streetsideOptions: {
          overviewMapMode: Microsoft.Maps.OverviewMapMode.hidden,
          showExitButton: false
        }
      }
    );
  }
}
