import { Component, Input, OnChanges} from '@angular/core';
import * as HighCharts from 'highcharts';

/**
 * Generated class for the HeroGraphicComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'hero-graphic',
  templateUrl: 'hero-graphic.html'
})
export class HeroGraphicComponent implements OnChanges {
  
  @Input()
  battles: any;

  constructor() {
  }

  ngOnChanges(changes: any) {
      if( changes.battles.currentValue != undefined ) {
        this.initChart();
      }
  }

  initChart(){
    HighCharts.chart('container', {
        chart: {
            type: 'spline'
        },
        title: {
            text: 'Snow depth at Vikjafjellet, Norway'
        },
        subtitle: {
            text: 'Irregular time data in Highcharts JS'
        },
        xAxis: {
            type: 'datetime',
            dateTimeLabelFormats: { // don't display the dummy year
                month: '%e. %b',
                year: '%b'
            },
            title: {
                text: 'Date'
            }
        },
        yAxis: {
            title: {
                text: 'Snow depth (m)'
            },
            min: 0
        },
        tooltip: {
            headerFormat: '<b>{series.name}</b><br>',
            pointFormat: '{point.x:%e. %b}: {point.y:.2f} m'
        },
    
        plotOptions: {
            spline: {
                marker: {
                    enabled: true
                }
            }
        },
    
        series: [{
            name: 'Wins',
            data: this.battles['wins'].map((item) => {
                return [item.date, item.value];
            })
            }, {
            name: 'Loses',
            data: this.battles['loose'].map((item) => {
                return [item.date, item.value];
            })
        }
        ]
        });
  }
}
