import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { YearlyData } from './models/weather-sample';
import { CommonModule } from '@angular/common';

/**
 * Component for displaying WeatherSample[] within table.
 */
@Component({
  selector: 'weather-table',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './weather-table.component.html',
  styleUrl: './weather-table.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class WeatherTableComponent {

  /**
   * Data source for table
   */
  @Input()
  public historicWeatherData: any;
  
}
