import React from 'react';
import { Button, ButtonSmall, ButtonLarge } from '../Button';
import { HeadingFour, HeadingFive, SmallText } from '../Text';
import { Card } from '../Card';
import styled from 'styled-components';
import { space, maxWidth, themeGet, padding } from 'styled-system';
const imageUrl = require('./yellow.png');

// Page-specific
const FeatureImageContainer = styled.div`
    ${space};
    border-radius: ${themeGet('radii.small')};
    max-width: 100%;
    height: auto;
    overflow: hidden;

    img {
        max-width: 100%;
    }
`;

const FeatureImage = ({ src, ...props }) => (
    <FeatureImageContainer {...props}>
        <img src={src} />
    </FeatureImageContainer>
);

const Container = styled.div`
    ${space};
    ${maxWidth};
    display: flex;
    flex-wrap: wrap;
    border: 1px solid ${themeGet('colors.grey')};
    max-height: 550px;
    overflow-y: scroll;
`;

// Generic
const Input = styled.input`
    ${space};
    ${padding};
    flex-basis: 100%;
    border-radius: ${themeGet('radii.large')};
    color: ${themeGet('colors.lightGrey')};
    font-size: ${themeGet('fontSizes.body')};
    border: 1px solid ${themeGet('colors.lightGrey')};

    &:hover {
        background-color: ${themeGet('colors.lightGrey')};
    }
`;

export default function Example() {
    return (
        <Container p={3} maxWidth={['mobile', 'tablet', 'desktop']}>
            <Input type="text" placeholder="Search for Products..." mb={3} p={2} />
            <HeadingFour bold={true}>Browse</HeadingFour>
            <FeatureImage src={imageUrl} my={3} />

            <HeadingFive bold={true}>Mellow Yellow Sofa</HeadingFive>
            <SmallText color="grey">
                This amazingly stylish Sofa is made for the Hipster in you. Crafted from the finest Coffee grounds and
                Beard Oil. Oh yes indeed.
            </SmallText>

            <SmallText bold={true}>Just Arrived</SmallText>
            <a href="#">
                See all <i>arrow</i>
            </a>
            <div style={{ display: 'flex' }}>
                <FeatureImage src={imageUrl} mr={1} my={3} />
                <FeatureImage src={imageUrl} ml={1} my={3} />
            </div>
            <Button type="primary">Save</Button>
            <ButtonSmall>Save</ButtonSmall>
            <ButtonLarge type="primary">Save</ButtonLarge>
        </Container>
    );
}
