import { ComponentFixture, TestBed } from '@angular/core/testing';
import { WeatherTableComponent } from './weather-table.component';

describe('WeatherTableComponent', () => {

  let component: WeatherTableComponent;
  let fixture: ComponentFixture<WeatherTableComponent>;
  let el: HTMLElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WeatherTableComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(WeatherTableComponent);
    component = fixture.componentInstance;
    el = fixture.nativeElement as HTMLElement;

  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('table should contain 6 columns', () => {
    fixture.detectChanges();
    expect(el.querySelectorAll('th').length).toEqual(6);
  });

  it('table should contain 3 rows', () => {

    component.historicWeatherData = [
      { year: 2000, month: 1, tempMaxDegC: 5.1, tempMinDegC: -5.3, rainMM: 100, sunHours: 0 },
      { year: 2000, month: 2, tempMaxDegC: 9.1, tempMinDegC: 1.9, rainMM: 45, sunHours: 40 },
      { year: 2000, month: 3, tempMaxDegC: 22.9, tempMinDegC: 3.3, rainMM: 34, sunHours: 70 }
    ];

    fixture.detectChanges();

    expect(el.querySelectorAll('tr').length).toEqual(3);

    expect(el.querySelectorAll('tr')[0].textContent).toEqual('20001-5.35.11000')
    expect(el.querySelectorAll('tr')[1].textContent).toEqual('200021.99.14540')
    expect(el.querySelectorAll('tr')[2].textContent).toEqual('200033.322.93470')
  });
});

