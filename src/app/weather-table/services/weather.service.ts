import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, throwError, map } from 'rxjs';
import { WeatherSample, YearlySummary, YearlyData } from '../models/weather-sample';

/**
 * Service that contacts remote endpoint to fetch historical weather data.
 */
@Injectable({
  providedIn: 'root',
})
export class WeatherService {
  constructor(readonly httpClient: HttpClient) { }

  /**
   * Returns Array of WeatherSamples for Heathrow Airport - London.
   *
   * For the purposes of this test, assume this is a 3rd party remote API.
   * The content of weather.json cannot be modified.
   *
   * @returns {Array<WeatherSample>} An Array of Weather Samples
   */
  public getWeatherSamples(): Observable<YearlyData> {
    return this.httpClient
      .get<Array<WeatherSample>>('../assets/weather.json')
      .pipe(map((d) => {
        const { yearlySummaries, groupedData } = this.getYearlyData(d);
        return { yearlySummaries, groupedData }
      }), catchError(this.handleError));
  }

  public getYearlyData(weatherData: WeatherSample[]) {
    const groupedData = weatherData.reduce((acc, data) => {
      acc[data.year] = acc[data.year] || [];
      acc[data.year].push(data);
      return acc;
    }, {} as Record<number, WeatherSample[]>);

    const yearlySummaries: YearlySummary[] = [];
    for (const year in groupedData) {
      const yearData = groupedData[year];
      const avgMaxTemp = yearData.reduce((sum, data) => sum + data.tempMaxDegC, 0) / yearData.length;
      const avgMinTemp = yearData.reduce((sum, data) => sum + data.tempMinDegC, 0) / yearData.length;
      const avgRain = yearData.reduce((sum, data) => sum + data.rainMM, 0) / yearData.length;
      const avgSunHours = yearData.reduce((sum, data) => sum + data.sunHours, 0) / yearData.length;
      yearlySummaries.push({ year: +year, avgMaxTemp, avgMinTemp, avgRain, avgSunHours });
    }
    return { groupedData, yearlySummaries };
  }

  private handleError(error: HttpErrorResponse) {
    if (error.status === 0) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error);
    } else {
      // The backend returned an unsuccessful response code.
      console.error(`Backend returned code ${error.status}`, error.error);
    }

    return throwError(
      () => new Error('Something bad happened; please try again later.')
    );
  }
}
