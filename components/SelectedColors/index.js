import React from 'react';

import Title from './Title';
import ColorInfo from './ColorInfo';
import ColorSquare from '../ColorSquare';
import Text from './Text';

const SelectedColors = ({ selectedColors }) => (
  <>
    <Title>Selected Colors</Title>
    {selectedColors.map((color, index) => (
      <ColorInfo key={`${index}-${color}`}>
        <ColorSquare color={color} />
        <Text>{color}</Text>
      </ColorInfo>
    ))}
  </>
);

export default SelectedColors;
