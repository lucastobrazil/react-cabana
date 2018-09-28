import styled from 'styled-components';
import {
    borderColor,
    border,
    borderRadius,
    boxShadow,
    space,
    width,
    fontSize,
    color,
    textAlign,
    fontFamily,
} from 'styled-system';

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
  ${fontFamily}
`;

export default Box;
