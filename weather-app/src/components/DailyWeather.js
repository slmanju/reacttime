import React, { Component } from 'react';
import { Panel, Grid, Row, Col } from 'react-bootstrap';

export default class DailyWeather extends Component {

  render() {
    return (
      <Grid>
        <Row>
          <Col sm={2} md={2}></Col>
          <Col sm={8} md={8}>
            <Panel>
              <Panel.Body>
                <div className="current-weather">
                  <div className="weather-temp">Weather Condition</div>
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
