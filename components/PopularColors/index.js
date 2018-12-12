import React from 'react';

import Wrapper from './Wrapper';
import ColorSquare from '../ColorSquare';

class PopularColors extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      colors: [
        '#F44336',
        '#9C27B0',
        '#3F51B5',
        '#03A9F4',
        '#009688',
        '#8BC34A',
        '#FFEB3B',
        '#FF9800',
        '#9E9E9E',
        '#DB7093',
        '#795548',
        '#000000'
      ]
    };
  }

  render() {
    const { colors } = this.state;
    const { selectColor } = this.props;

    return (
      <Wrapper>
        {colors.map(color => (
          <ColorSquare key={color} color={color} onClick={selectColor.bind(this, color)} />
        ))}
      </Wrapper>
    );
  }
}

export default PopularColors;
