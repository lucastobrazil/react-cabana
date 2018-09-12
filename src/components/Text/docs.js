import React from 'react';
import {
    UberText,
    HeroText,
    LeadText,
    BodyText,
    SmallText,
    CaptionText,
    TinyText,
    HeadingOne,
    HeadingTwo,
    HeadingThree,
    HeadingFour,
    HeadingFive,
} from '.';
const TextDocs = () => (
    <div style={{ display: 'flex', flexWrap: 'wrap' }}>
        <div style={{ flexBasis: '100%' }}>
            <BodyText>Typography</BodyText>
        </div>
        <div>
            <HeadingOne color="primary">Font Family #1</HeadingOne>
            <Content />
        </div>
        <div>
            <HeadingOne color="primary">Font Family #2</HeadingOne>
            <Content fontFamily="alt" />
        </div>
    </div>
);

const Content = ({ fontFamily }) => (
    <div>
        <UberText fontWeight="bold" fontFamily={fontFamily}>
            Uber
        </UberText>
        <UberText fontFamily={fontFamily}>Uber</UberText>
        <HeroText fontWeight="bold" fontFamily={fontFamily}>
            Hero
        </HeroText>
        <HeroText fontFamily={fontFamily}>Hero</HeroText>
        <HeadingOne fontWeight="bold" fontFamily={fontFamily}>
            H1 Heading
        </HeadingOne>
        <HeadingOne fontFamily={fontFamily}>H1 Heading</HeadingOne>
        <HeadingTwo fontWeight="bold" fontFamily={fontFamily}>
            H2 Heading
        </HeadingTwo>
        <HeadingTwo fontFamily={fontFamily}>H2 Heading</HeadingTwo>
        <HeadingThree fontWeight="bold" fontFamily={fontFamily}>
            H3 Heading
        </HeadingThree>
        <HeadingThree fontFamily={fontFamily}>H3 Heading</HeadingThree>
        <HeadingFour fontWeight="bold" fontFamily={fontFamily}>
            H4 Heading
        </HeadingFour>
        <HeadingFour fontFamily={fontFamily}>H4 Heading</HeadingFour>
        <HeadingFive fontWeight="bold" fontFamily={fontFamily}>
            H5 Heading
        </HeadingFive>
        <HeadingFive fontFamily={fontFamily}>H5 Heading</HeadingFive>
        <LeadText fontWeight="bold" fontFamily={fontFamily}>
            Lead
        </LeadText>
        <LeadText fontFamily={fontFamily}>Lead</LeadText>
        <BodyText fontWeight="bold" fontFamily={fontFamily}>
            Body
        </BodyText>
        <BodyText fontFamily={fontFamily}>Body</BodyText>
        <SmallText fontWeight="bold" fontFamily={fontFamily}>
            Small
        </SmallText>
        <SmallText fontFamily={fontFamily}>Small</SmallText>
        <CaptionText fontWeight="bold" fontFamily={fontFamily}>
            Caption
        </CaptionText>
        <CaptionText fontFamily={fontFamily}>Caption</CaptionText>
        <TinyText fontWeight="bold" fontFamily={fontFamily}>
            Tiny
        </TinyText>
        <TinyText fontFamily={fontFamily}>Tiny</TinyText>
    </div>
);
export default TextDocs;
