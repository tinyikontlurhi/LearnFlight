import { Component, ViewChild } from '@angular/core';

@Component({
  selector: 'app-map-google',
  templateUrl: './map-google.component.html',
  styleUrls: ['./map-google.component.scss']
})
export class MapgoogleComponent {
  @ViewChild('map1', { static: true }) map1:any = Object.create(null);
  @ViewChild('map2', { static: true }) map2:any = Object.create(null);
  @ViewChild('map3', { static: true }) map3:any = Object.create(null);
  @ViewChild('map4', { static: true }) map4:any = Object.create(null);

  lat = -26.266111;
  lng = 27.865833;
  latA = -26.366111;
  lngA = 27.965833;
  latB = -26.466111;
  lngB = 27.975833;
  latC = -26.266111;
  lngC = 27.865833;
  zoom = 8;

  styles: any = [
    {
      featureType: 'all',
      stylers: [
        {
          saturation: -80
        }
      ]
    },
    {
      featureType: 'road.arterial',
      elementType: 'geometry',
      stylers: [
        {
          hue: '#00ffee'
        },
        {
          saturation: 50
        }
      ]
    },
    {
      featureType: 'poi.business',
      elementType: 'labels',
      stylers: [
        {
          visibility: 'off'
        }
      ]
    }
  ];

  constructor() { }
}
