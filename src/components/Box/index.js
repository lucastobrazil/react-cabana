import styled from 'styled-components';
import { borderColor, border, borderRadius, boxShadow, space, width, fontSize, color, textAlign } from 'styled-system';

const Box = styled.div`
  ${space}
  ${width}
  ${fontSize}
  ${color}
  ${border}
  ${borderColor}
  ${borderRadius}
  ${boxShadow}
  ${textAlign}
`;

export default Box;
