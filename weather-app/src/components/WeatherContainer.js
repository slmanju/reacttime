import React, { Component } from 'react';

import CurrentWeather from './CurrentWeather';
import HourlyWeather from './HourlyWeather';

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
  }

  componentDidMount() {
    weatherService.findCurrentWeather().then(currentWeather => {
      this.setState({ currentWeather });
    });

    weatherService.findHourlyWeather().then(hourlyWeather => {
      this.setState({ hourlyWeather });
    });
  }

  render() {
    return (
      <div>
        <CurrentWeather currentWeather={ this.state.currentWeather } />
        <HourlyWeather hourlyWeather={ this.state.hourlyWeather } />
      </div>
    );
  }
}
