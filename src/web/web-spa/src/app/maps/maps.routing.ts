import { Routes } from '@angular/router';

import { MapgoogleComponent } from './map-google/map-google.component';

export const MapRoutes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'google',
        component: MapgoogleComponent,
        data: {
          title: 'Field Utilization',
          urls: [
            { title: 'Dashboard', url: '/dashboard' },
            { title: 'Field Utilization' }
          ]
        }
      }
    ]
  }
];
