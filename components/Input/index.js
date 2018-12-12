import React from 'react';

import StyledInput from './Input';

class Input extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      color: ''
    };

    this.updateInput = this.updateInput.bind(this);
    this.selectColor = this.selectColor.bind(this);
  }

  updateInput({ target }) {
    this.setState({
      color: target.value
    });
  }

  selectColor(e) {
    e.preventDefault();
    let { color } = this.state;

    if (!color.startsWith('#')) {
      color = `#${color}`;
    }

    color = color.toUpperCase();

    if (color.length === 7 || color.length === 4) {
      this.props.selectColor(color);
    }
  }

  render() {
    const { color } = this.state;

    return (
      <form onSubmit={this.selectColor}>
        <StyledInput name="color" value={color} onChange={this.updateInput} />
      </form>
    );
  }
}

export default Input;
