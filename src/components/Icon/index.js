import React from 'react';
import { IconModulePraise } from 'featherico';
import styled from 'styled-components';
import { fontSize, style } from 'styled-system';

const svgStrokeColor = style({
    prop: 'stroke',
    cssProperty: 'stroke',
    key: 'colors',
});

const MyIcon = styled(IconModulePraise)`
    ${fontSize};
    ${svgStrokeColor};
`;

MyIcon.defaultProps = {
    stroke: 'primary',
    fontSize: 'uber',
};

export default function Icon(props) {
    return <MyIcon {...props} />;
}
