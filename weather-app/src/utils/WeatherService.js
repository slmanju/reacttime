import { KEY } from './WeatherKey';

import axios from 'axios';

const WEATHER_API = 'http://api.openweathermap.org/data/2.5';
const OPEN_WEATHER_IMG_URL = 'http://openweathermap.org/img/w';

// now `${OPEN_WEATHER_BASE_URL}/weather?appid=${OPEN_WEATHER_API_KEY}&lat=${latitude}&lon=${longitude}&units=metric`;
// daily `${OPEN_WEATHER_BASE_URL}/forecast/daily?appid=${OPEN_WEATHER_API_KEY}&lat=${latitude}&lon=${longitude}&units=metric&cnt=7`;
// hourly ${OPEN_WEATHER_BASE_URL}/forecast?appid=${OPEN_WEATHER_API_KEY}&lat=${latitude}&lon=${longitude}&units=metric&cnt=12`;

function fetchCurrentWeather() {
  const URL = `${WEATHER_API}/weather?q=Piliyandala&units=metric&appid=${KEY}`;
  return new Promise((resolve, reject) => {
    axios.get(URL).then(response => {
      if (response && response.status === 200) {
        // console.log(response.data);
        const data = response.data;
        const location = {
             name: data.name,
             latitude: data.coord.lat,
             longitude: data.coord.lon
         };
         const dailyForcast = {
            condition: data.weather[0].description,
            date: new Date(data.dt * 1000),
            icon: `${OPEN_WEATHER_IMG_URL}/${data.weather[0].icon}.png`,
            location: location,
            temperature: {
                now: data.main.temp,
                minimum: data.main.temp_min,
                maximum: data.main.temp_max
            }
         };
        //  console.log('dailyForcast', dailyForcast);
         resolve(dailyForcast);
      } else {
        reject('Weather data not found');
      }
    }).catch(error => {
      reject(error.message);
    });
  });
}

function fetchHourlyWeather() {
  const URL = `${WEATHER_API}/forecast?q=Piliyandala&units=metric&cnt=12&appid=${KEY}`;
  return new Promise((resolve, reject) => {
    axios.get(URL).then(response => {
      if (response && response.status === 200) {
        const data = response.data;
        const location = {
           name: data.city.name,
           latitude: data.city.coord.lat,
           longitude: data.city.coord.lon
        };
        let hourlyWeather = data.list.map(forecast => {
          return {
            condition: forecast.weather[0].description,
            date: new Date(forecast.dt * 1000),
            icon: `${OPEN_WEATHER_IMG_URL}/${forecast.weather[0].icon}.png`,
            location: location,
            temperature: {
                now: forecast.main.temp,
                minimum: forecast.main.temp_min,
                maximum: forecast.main.temp_max
            }
          }
        });
        resolve(hourlyWeather);
      } else {
        reject('Weather data not found');
      }
    }).catch(error => {
      reject(error.message);
    });
  });
}

function fetchDailyWeather() {
  const URL = `${WEATHER_API}/forecast?q=Piliyandala&units=metric&appid=${KEY}`;
  console.log(URL);
  return new Promise((resolve, reject) => {
    axios.get(URL).then(response => {
      if (response && response.status === 200) {
        const data = response.data;
         resolve(data);
      } else {
        reject('Weather data not found');
      }
    }).catch(error => {
      reject(error.message);
    });
  });
}

class WeatherService {

  findCurrentWeather() {
    return fetchCurrentWeather();
  }

  findHourlyWeather() {
    return fetchHourlyWeather();
  }

  findDailyWeather() {
    return fetchDailyWeather();
  }

}

const weatherService = new WeatherService();

weatherService.findHourlyWeather().then(data => {
  console.log(data);
});

export default weatherService;
