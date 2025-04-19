import { Component, OnInit } from '@angular/core';
import { ApexAxisChartSeries, ApexChart, ApexXAxis, ApexStroke, ApexTooltip, NgApexchartsModule } from 'ng-apexcharts';
import { SupabaseService } from '../../../core/supabase.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-dashboard',
  imports: [NgApexchartsModule, FormsModule],
  templateUrl: './dashboard.component.html'
})
export class DashboardComponent implements OnInit {
  selectedFilter: 'day' | 'week' | 'month' = 'day';

  chartSeries: ApexAxisChartSeries = [];
  chartOptions = {
    chart: { type: 'line', height: 350 } as ApexChart,
    xaxis: { categories: [] } as ApexXAxis,
    stroke: { curve: 'smooth' } as ApexStroke,
    tooltip: { enabled: true } as ApexTooltip
  };

  constructor(private supabase: SupabaseService) {}

  ngOnInit() {
    this.loadChartData();
  }

  async loadChartData() {
    const data = await this.supabase.getVisitsGrouped(this.selectedFilter);

    this.chartSeries = [{
      name: 'Besuche',
      data: data.map(entry => entry.count)
    }];

    this.chartOptions.xaxis = {
      categories: data.map(entry => entry.label)
    };
  }
}
