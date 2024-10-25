### Requirements

You have been provided with a Angular application which displays historical weather measurements for Heathrow Airport. The metrics reported include MinTemp, MaxTemp, Rainfall and Sunlight.

We would like you to update this application to insert a summary row at the end of each year. The summary should include the average of the monthly weather readings for the preceding year.

* Use the provided WeatherService to fetch data.
* You are not allowed to install any additional npm packages.
* The time allotted to the test is 1 hour. Incomplete solutions are acceptable.

#### Example of expected output


| Year	| Month | Min Temp (°C) | Max Temp (°C) | Rain (mm)	| Sunlight (hours) |
|-------|-------|---------------|---------------|-----------| -----------------|
| 2000  | 1     | 2.4           | 8.6           | 16.5      | 78.6             |
| 2000  | 2     | 3.8           | 10.4          | 66.2      | 102.5            |
| 2000  | 3     | 4.9           | 12.1          | 16        | 120.4            |
| 2000  | 4     | 5.4           | 12.9          | 99.6      | 135.8            |
| 2000  | 5     | 9.6           | 18            | 87.2      | 202.9            |
| 2000  | 6     | 12.8          | 21            | 19.2      | 169.5            |
| 2000  | 7     | 12.8          | 21            | 52.8      | 174.7            |
| 2000  | 8     | 14            | 23.2          | 32.3      | 211.4            |
| 2000  | 9     | 12.5          | 20.1          | 105.8     | 132.1            |
| 2000  | 10    | 8.5           | 14.7          | 155.4     | 98               | 
| 2000  | 11    | 4.5           | 11            | 99.5      | 74.9             |
| 2000  | 12    | 4.6           | 9             | 73.9      | 50               |
| **YEARLY AVG** || **7.98**    | **15.17**     | **68.37** | **129.23**       |
| 2002  | 1     | 1.8           | 7.1           | 75.2      | 87               |
| 2002  | 2     | 2.8           | 9.2           | 69.6      | 92.3             |
| ...   |       |               |               |           |                  |
| ...   |       |               |               |           |                  |

