import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/core';
import { BingApiLoaderService } from 'src/app/shared/services/bing-api-loader.service';

@Component({
  selector: 'app-route-detail',
  templateUrl: './route-detail.component.html',
  styleUrls: ['./route-detail.component.scss']
})
export class RouteDetailComponent implements OnInit {

  panels: any[] = [
    { size: '60%', min: '10%', collapsible: false },
    { size: '40%', min: '5%' , collapsible: false }
  ];
  source: string[] =
    [
        'Affogato',
        'Americano',
        'Bicerin',
        'Breve',
        'Café Bombón',
        'Café au lait',
        'Caffé Corretto',
        'Café Crema',
        'Caffé Latte',
        'Caffé macchiato',
        'Café mélange',
        'Coffee milk',
        'Cafe mocha',
        'Cappuccino',
        'Carajillo',
        'Cortado',
        'Cuban espresso',
        'Espresso',
        'Eiskaffee',
        'The Flat White',
        'Frappuccino',
        'Galao',
        'Greek frappé coffee',
        'Iced Coffee﻿',
        'Indian filter coffee',
        'Instant coffee',
        'Irish coffee',
        'Liqueur coffee'
    ];  
  mapLoaded = false;
  date: Date = new Date();
  columns: any[] =
  [
      { text: 'First Name', dataField: 'First Name', width: 200 },
      { text: 'Last Name', dataField: 'Last Name', width: 200 },
      { text: 'Product', dataField: 'Product', width: 250 },
      { text: 'Unit Price', dataField: 'Price', width: 100, align: 'right', cellsAlign: 'right', cellsFormat: 'c2' },
      { text: 'Quantity', dataField: 'Quantity', width: 100, align: 'right', cellsAlign: 'right', cellsFormat: 'n' }
  ];

  getWidth() : any {
		if (document.body.offsetWidth < 850) {
			return '90%';
		}
		
		return 850;
	}
  constructor(private bingApiLoader: BingApiLoaderService,private httpService:HttpService) {
   
    this.httpService.get('https://www.mocky.io/v2/5ab2663b2e00003d044cc144?mocky-delay=1000ms')
    .subscribe(data => {
      console.log('Yo', data);
    });

    this.httpService.get('https://www.mocky.io/v2/5ab2663b2e00003d044cc144?mocky-delay=10000ms')
    .subscribe(data => {
      console.log('Yo', data);
    });

    this.bingApiLoader.load().then(() => {
      console.log('map loaded');
      setTimeout(()=> this.mapLoaded = true , 100);
    });

   
  }

  ngOnInit(): void {
  }

}
