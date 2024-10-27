
/**
 * Weather measurements for a given year / month.
 */
export interface WeatherSample {

  /**
   * The year of data collection.
   */
  year: number;

  /**
   * The month of data collection.
   */
  month: number;

  /**
   * The maximum recorded temperature.
   */
  tempMaxDegC: number;

  /**
   * The minimum recorded temperature.
   */
  tempMinDegC: number;

  /**
   * The the total rainfall in millimeters
   */
  rainMM: number;

  /**
   * The total sunlight in hours
   */
  sunHours: number;
}

export interface YearlySummary { 
  year: number;
  avgMaxTemp: number;
  avgMinTemp: number;
  avgRain: number;
  avgSunHours: number;
}

export interface YearlyData { 
  groupedData: Record<number, WeatherSample[]>,
  yearlySummaries: YearlySummary[]
}
