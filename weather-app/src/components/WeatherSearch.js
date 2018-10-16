import React, { Component } from 'react';
import { Panel, Grid, Row, Col, Glyphicon, Button, Form, FormGroup, ControlLabel, FormControl } from 'react-bootstrap';

export default class WeatherSearch extends Component {

  constructor() {
    super();
    this.onSubmit = this.onSubmit.bind(this);
  }

  onSubmit(event) {
    event.preventDefault();
    const searchForm = document.forms.searchForm;
    this.props.search(searchForm.city.value);
  }

  render() {
    return (
      <Grid>
        <Row>
          <Col sm={2} md={2}></Col>
          <Col sm={8} md={8}>
            <Panel>
              <Panel.Body>
                <Form inline onSubmit={ this.onSubmit } name="searchForm">
                  <FormGroup controlId="formInlineName">
                    <FormControl type="text" placeholder="enter city nanme" name="city"/>
                  </FormGroup>
                  <Button type="submit"><Glyphicon glyph="search" /> Search</Button>
                </Form>
              </Panel.Body>
            </Panel>
          </Col>
          <Col sm={2} md={2}></Col>
        </Row>
      </Grid>
    );
  }
}
