import styled from 'styled-components';

/**
 * Reusable component for showing a square of color
 */

const ColorSquare = styled.div`
  width: 50px;
  height: 50px;
  background-color: ${props => props.color};
  margin: 5px 0;
  cursor: pointer;
`;

export default ColorSquare;
