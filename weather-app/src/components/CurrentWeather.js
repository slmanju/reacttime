import React, { Component } from 'react';
import { Panel, Grid, Row, Col } from 'react-bootstrap';

export default class CurrentWeather extends Component {

  render() {
    return (
      <Grid>
        <Row>
          <Col sm={2} md={2}></Col>
          <Col sm={8} md={8}>
            <Panel>
              <Panel.Body>
                <div className="current-weather">
                  <div className="weather-temp">Colomb (25 ~ 35)</div>
                  <div className="weather-now">33 &deg;&nbsp;<sup>c</sup></div>
                  <div className="weather-temp">cloudy</div>
                  <div className="weather-temp">updated at </div>
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
