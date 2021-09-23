import { Component, OnInit } from '@angular/core';
import * as c3 from 'c3';
import * as Chartist from 'chartist';
import { ChartType, ChartEvent } from 'ng-chartist';

declare var require: any;

const data: any = require('./data.json');

interface Chart {
  type: ChartType;
  data: Chartist.IChartistData;
  options?: any;
  responsiveOptions?: any;
  events?: ChartEvent;
}

@Component({
  selector: 'app-month-view',
  templateUrl: './month-view.component.html',
  styleUrls: ['./month-view.component.css']
})
export class MonthviewComponent implements OnInit{
  moisture: number = 2;
  soilReadDesc: string = '';

  constructor() {}

  ngOnInit() {
    this.getSoilReading();
  }
  lineChart: Chart = {
    type: 'Line',
    data: data['Line'],
    options: {
      low: 0,
      high: 28,
      showArea: true,
      fullWidth: true,
      chartPadding: {
        top: 15,
        right: 15,
        bottom: 5,
        left: 40
      },
      axisY: {
        onlyInteger: true,
        scaleMinSpace: 40,
        offset: 20,
        labelInterpolationFnc: function(value:number) {
          return value + 'k';
        }
      }
    },
    responsiveOptions: [
      [
        'screen and (max-width: 1023px)',
        {
          chartPadding: {
            top: 15,
            right: 12,
            bottom: 5,
            left: 10
          }
        }
      ]
    ]
  };

  getSoilReading() {
    if (this.moisture >= 7) {
      this.soilReadDesc = 'This means that your soil is moist. While moist soil often encourages growth, it can cause issues if it gets too waterlogged. Consider setting up an irrigation system to help drain your soil';
    } else if (this.moisture <= 3) {
      this.soilReadDesc = 'Your soil is dry. In this case, consider watering your soil. Select a watering method that delivers water close to the plant roots without spreading it to other parts of the farm';
    } else {
      this.soilReadDesc = 'It’s typically best to keep your soil around 5. While different plants thrive in different levels of moisture, 5 is a good middle ground where a variety of plants can grow and flourish';
    }
  }
}
