import { Component, OnInit, Input } from '@angular/core';
import { THEME_COLORS } from '../../shared/theme.colors';

@Component({
  selector: 'app-pie-chart',
  templateUrl: './pie-chart.component.html',
  styleUrls: ['./pie-chart.component.css']
})


export class PieChartComponent implements OnInit {

  theme = 'Bright';

  @Input() inputData: any;
  @Input() limit: number;

  pieChartData: number[] = [350, 450 , 120];
  pieChartLabels: string[] = ['XYX ', 'ZZZZ' , 'AAAAA']

  colors: any[] = [
    {
      backgroundColor: this.themeColors(this.theme),
      borderColor: '#111'
    }
  ];

  pieChartType = 'doughnut';


  constructor() { }

  ngOnInit() {
  }

  themeColors(setName: string): string[] {
    const c = THEME_COLORS.slice(0)
      .find(set => set.name === setName).colorSet;

    return c;
  }

}
