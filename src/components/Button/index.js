import React from 'react';
import styled from 'styled-components';
import {
    borderColor,
    style,
    space,
    color,
    boxShadow,
    themeGet,
    fontSize,
    letterSpacing,
    lineHeight,
    fontFamily,
    fontWeight,
    borderRadius,
} from 'styled-system';

const svgFill = style({
    prop: 'fill',
    cssProperty: 'fill',
    key: 'colors',
});
const exampleIcon = (
    <svg
        width="20"
        height="18"
        viewBox="0 0 20 18"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
    >
        <g id="💎-Symbols" fill="none" fillRule="evenodd">
            <g id="Icon/Camera" transform="translate(-2 -3)">
                <path d="M19.5000002,5.4545454 L17.4500002,5.4545454 L15.7833335,3 L8.22500014,3 L6.55833347,5.4545454 L4.50000012,5.4545454 C3.11929167,5.45454546 2,6.55348629 2,7.90909081 C2,7.90909081 2,7.90909081 2,7.90909081 L2,18.5454542 L2,18.5454546 C2.00000021,19.9010591 3.11929167,21 4.50000001,21 L19.5000001,21 C20.8807083,21.0000001 22,19.9010591 22,18.5454546 L22,7.90909118 C22,6.55348666 20.8807083,5.45454577 19.5,5.45454577 L19.5000002,5.4545454 Z M12.0000002,17.3181815 L12,17.3181815 C9.69881664,17.3181814 7.83333329,15.4866161 7.83333329,13.2272725 C7.83333339,10.9679289 9.69881664,9.13636351 12,9.13636351 C14.3011833,9.13636361 16.1666667,10.9679289 16.1666667,13.2272725 L16.1666667,13.2272723 C16.1666667,15.4866159 14.3011833,17.3181813 12,17.3181813 L12.0000002,17.3181815 Z M18.6666669,9.54545441 C18.2064293,9.54545439 17.8333335,9.17914215 17.8333335,8.72727261 C17.8333335,8.27540307 18.2064293,7.90909081 18.6666668,7.90909081 C19.1269043,7.90909083 19.5000002,8.27540307 19.5000002,8.72727261 C19.5000002,9.17914211 19.1269043,9.54545437 18.6666668,9.54545437 Z" />
            </g>
        </g>
    </svg>
);

const Icon = styled.i`
    ${space};
    & path {
        ${svgFill};
    }
`;

const BaseButton = styled.button`
    ${space};
    ${fontSize};
    ${letterSpacing};
    ${lineHeight};
    ${boxShadow};
    ${color};
    ${borderColor};
    ${fontFamily};
    ${fontWeight};
    ${borderRadius};
    border: 1px solid;
    &:hover {
        opacity: 0.9;
    }

    &:focus {
        outline: 2px solid ${props => themeGet(`colors.${props.bg}`)};
        outline-offset: 1px;
    }
`;

/*
     No need to understand the theme here, just 'feed' the right value 
     to the component and it will access the theme internally.
*/
BaseButton.defaultProps = {
    boxShadow: 20,
    fontWeight: 'bold',
    borderRadius: 'small',
};

BaseButton.propTypes = {
    ...space.PropTypes,
    ...fontSize.PropTypes,
    ...letterSpacing.PropTypes,
    ...lineHeight.PropTypes,
    ...boxShadow.PropTypes,
    ...color.PropTypes,
    ...borderColor.PropTypes,
    ...fontFamily.PropTypes,
    ...fontWeight.PropTypes,
    ...borderRadius.PropTypes,
};

const Button = props => (
    <BaseButton py={1} px={3} fontSize={'body'} {...props}>
        {props.icon}
        {props.children}
    </BaseButton>
);
const ButtonSmall = props => (
    <BaseButton py={1} px={2} fontSize="caption" letterSpacing="tiny" lineHeight="body" {...props} />
);
const ButtonLarge = props => (
    <BaseButton py={1} px={4} fontSize="h5" letterSpacing="tiny" lineHeight="31px" {...props} />
);

const ButtonIcon = props => (
    <Icon mr={1} {...props}>
        {exampleIcon}
    </Icon>
);

export { ButtonSmall, Button, ButtonLarge, ButtonIcon };
