import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { WeatherSample } from './weather-table/models/weather-sample';
import { WeatherService } from './weather-table/services/weather.service';
import { WeatherTableComponent } from './weather-table/weather-table.component';

/**
 * Application for displaying historical weather data for Heathrow - London.
 * Displays monthly values for a number of weather related measurements from year 2000 to present.
 */
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, HttpClientModule, WeatherTableComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
  public historicWeatherData!: Observable<Array<WeatherSample>>;

  /**
   * @param weatherService service to provide historical weather data.
   */
  constructor(readonly weatherService: WeatherService) { }

  public ngOnInit(): void {
    this.historicWeatherData = this.weatherService.getWeatherSamples();
  }
}
