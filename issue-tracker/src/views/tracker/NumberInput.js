import React, { Component } from 'react';

class NumberInput extends Component {

  constructor(props) {
    super(props);
    this.state = { value: this.format(props.value) };
    this.onBlur = this.onBlur.bind(this);
    this.onChange = this.onChange.bind(this);
  }

  componentWillReceiveProps(newProps) {
    this.setState({ value: this.format(newProps.value) });
  }

  // on lost focus
  onBlur(event) {
    this.props.onChange(event, this.unformat(this.state.value));
  }

  onChange(e) {
    if (e.target.value.match(/^\d*$/)) {
      this.setState({ value: e.target.value });
    }
  }

  format(numuber) {
    return numuber != null ? numuber.toString() : '';
  }

  unformat(str) {
    const val = parseInt(str, 10);
    return isNaN(val) ? null : val;
  }

  render() {
    return (
      <div>
        <input type="text" { ...this.props }
                value={ this.state.value }
                onBlur={ this.onBlur }
                onChange={ this.onChange } />
      </div>
    );
  }

}

export default NumberInput;
