import React, { Component } from 'react';

import CurrentWeather from './CurrentWeather';
import HourlyWeather from './HourlyWeather';
import WeatherSearch from './WeatherSearch';

import weatherService from '../utils/WeatherService';

export default class WeatherContainer extends Component {

  constructor() {
    super();
    this.state = {
      currentWeather: {
         condition: '',
         date: '',
         icon: '',
         location: {
              name: '',
              latitude: '',
              longitude: ''
          },
         temperature: {
             now: '',
             minimum: '',
             maximum: ''
         }
      },
      hourlyWeather: []
    };
    this.search = this.search.bind(this);
  }

  _findWeather(city) {
    weatherService.findCurrentWeather(city).then(currentWeather => {
      this.setState({ currentWeather });
    });

    weatherService.findHourlyWeather(city).then(hourlyWeather => {
      this.setState({ hourlyWeather });
    });
  }

  componentDidMount() {
    this._findWeather('Piliyandala');
  }

  search(city) {
    this._findWeather(city);
  }

  render() {
    return (
      <div>
        <WeatherSearch search={ this.search }/>
        <CurrentWeather currentWeather={ this.state.currentWeather } />
        <HourlyWeather hourlyWeather={ this.state.hourlyWeather } />
      </div>
    );
  }
}
