import React, { Component } from 'react';

import CurrentWeather from './CurrentWeather';
import DailyWeather from './DailyWeather';
import HourlyWeather from './HourlyWeather';

import WeatherService from '../utils/WeatherService';

export default class WeatherContainer extends Component {

  render() {
    return (
      <div>
        <CurrentWeather />
        <HourlyWeather />
        <DailyWeather />
      </div>
    );
  }
}
