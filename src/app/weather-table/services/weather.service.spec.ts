import { HttpClient } from '@angular/common/http';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { WeatherService } from './weather.service';

describe('WeatherService', () => {
  let service: WeatherService;
  let httpClient: HttpClient;
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
    });

    httpClient = TestBed.inject(HttpClient);
    httpTestingController = TestBed.inject(HttpTestingController);
    service = TestBed.inject(WeatherService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('Should handle http errors', () => {
    console.error = jasmine.createSpy('error');

    service.getWeatherSamples().subscribe({
      error: (err) => {
        expect(console.error).toHaveBeenCalledWith(
          'Backend returned code 500',
          'Something went wrong'
        );

        expect(err).toEqual(
          Error('Something bad happened; please try again later.')
        );
      },
    });

    // fake 500 error from http request
    httpTestingController
      .expectOne('../assets/weather.json')
      .flush('Something went wrong', {
        status: 500,
        statusText: 'Internal Server Error',
      });
  });
});
