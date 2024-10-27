import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, throwError } from 'rxjs';
import { WeatherSample } from '../models/weather-sample';

/**
 * Service that contacts remote endpoint to fetch historical weather data.
 */
@Injectable({
  providedIn: 'root',
})
export class WeatherService {
  constructor(readonly httpClient: HttpClient) {}

  /**
   * Returns Array of WeatherSamples for Heathrow Airport - London.
   *
   * For the purposes of this test, assume this is a 3rd party remote API.
   * The content of weather.json cannot be modified.
   *
   * @returns {Array<WeatherSample>} An Array of Weather Samples
   */
  public getWeatherSamples(): Observable<Array<WeatherSample>> {
    return this.httpClient
      .get<Array<WeatherSample>>('../assets/weather.json')
      .pipe(catchError(this.handleError));
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
