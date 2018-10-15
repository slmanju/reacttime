import React, { Component } from 'react';
import { Panel, Grid, Row, Col } from 'react-bootstrap';

export default class CurrentWeather extends Component {

  render() {
    const currentWeather = this.props.currentWeather;
    const date = currentWeather.date;
    const dateTime = (date) ? `${date.toLocaleDateString()} ${date.toLocaleTimeString()}` : '';
    return (
      <Grid>
        <Row>
          <Col sm={2} md={2}></Col>
          <Col sm={8} md={8}>
            <Panel>
              <Panel.Body>
                <div className="current-weather">
                  <div className="weather-temp">{ currentWeather.location.name } ({ currentWeather.temperature.minimum } ~ { currentWeather.temperature.maximum })</div>
                  <div className="weather-now">{ currentWeather.temperature.now } &deg;&nbsp;<sup>c</sup></div>
                  <div className="weather-temp">
                    <span>{ currentWeather.condition }</span>
                    <span><img src={ currentWeather.icon } alt="condition" /></span>
                  </div>
                  <div className="weather-temp">{ dateTime }</div>
                  <button>Refresh</button>
                </div>
              </Panel.Body>
            </Panel>
          </Col>
          <Col sm={2} md={2}></Col>
        </Row>
      </Grid>
    );
  }
}
