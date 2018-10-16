import React, { Component } from 'react';
import { Panel, Grid, Row, Col, Well, Carousel } from 'react-bootstrap';

class HourlyWeatherCard extends Component {
  render() {
    const weather = this.props.weather;
    const date = weather.date;
    const dateTime = (date) ? `${date.toLocaleDateString()} ${date.toLocaleTimeString()}` : '';
    return (
      <Col className="center">
        <div>
          <div>{ weather.temperature.now } &deg;&nbsp;<sup>c</sup></div>
          <div>
            <span>{ weather.condition }</span>
            <span><img src={ weather.icon } alt="condition" /></span>
          </div>
          <div>{ dateTime }</div>
        </div>
      </Col>
    );
  }
}

class ControlledCarousel extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.handleSelect = this.handleSelect.bind(this);
    this.state = {
      index: 0,
      direction: null
    };
  }

  handleSelect(selectedIndex, e) {
    this.setState({
      index: selectedIndex,
      direction: e.direction
    });
  }

  render() {
    const { index, direction } = this.state;
    const forecasts = this.props.forecasts;

    return (
      <Carousel activeIndex={ index } direction={ direction } onSelect={ this.handleSelect }>
        {
          forecasts.map((weather, index) => {
            return <Carousel.Item key={ index }>
              <HourlyWeatherCard weather={ weather } key={ index } />
            </Carousel.Item>
          })
        }
      </Carousel>
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

                <ControlledCarousel forecasts={ hourlyWeather }/>

              </Panel.Body>
            </Panel>
          </Col>
          <Col sm={2} md={2}></Col>
        </Row>
      </Grid>
    );
  }
}
//{ hourlyWeather.map((weather, index) => <HourlyWeatherCard weather={ weather } key={ index } />) }
