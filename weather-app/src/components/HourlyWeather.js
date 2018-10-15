import React, { Component } from 'react';
import { Panel, Grid, Row, Col, Well } from 'react-bootstrap';

class HourlyWeatherCard extends Component {
  render() {
    const weather = this.props.weather;
    const date = weather.date;
    const dateTime = (date) ? `${date.toLocaleDateString()} ${date.toLocaleTimeString()}` : '';
    return (
      <Col sm={4} md={4}>
        <Well>
          <div>
            <div>{ weather.temperature.now } &deg;&nbsp;<sup>c</sup></div>
            <div>
              <span>{ weather.condition }</span>
              <span><img src={ weather.icon } alt="condition" /></span>
            </div>
            <div>{ dateTime }</div>
          </div>
        </Well>
      </Col>
    );
  }
}

export default class HourlyWeather extends Component {

  render() {
    const hourlyWeather = this.props.hourlyWeather;
    return (
      <Grid>
        <Row>
          <Col sm={2} md={2}></Col>
          <Col sm={8} md={8}>
            <Panel>
              <Panel.Body>
                { hourlyWeather.map((weather, index) => <HourlyWeatherCard weather={ weather } key={ index } />) }
              </Panel.Body>
            </Panel>
          </Col>
          <Col sm={2} md={2}></Col>
        </Row>
      </Grid>
    );
  }
}
