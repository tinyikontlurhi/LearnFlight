import { Component, AfterViewInit } from '@angular/core';
import * as c3 from 'c3';

@Component({
  selector: 'app-realtime-visit',
  templateUrl: './realtime-visit.component.html',
  styleUrls: ['./realtime-visit.component.css']
})
export class RealtimevisitComponent implements AfterViewInit {
  constructor() {}

  ngAfterViewInit() {
    const chart = c3.generate({
      bindto: '#placeholder',
      data: {
        columns: [
          ['Ammonia', 30, 40, 10, 40, 15, 27, 13, 20, 28],
          ['Conductivity', 13, 34, 20, 35, 25, 10, 19, 13, 28]
        ],
        type: 'area-spline'
      },
      axis: {
        y: {
          show: true,
          tick: {
            count: 0,
            outer: false
          }
        },
        x: {
          show: true
        }
      },
      legend: {
        hide: true
      },
      color: {
        pattern: ['#2961ff', '#40c4ff']
      }
    });
  }
}
