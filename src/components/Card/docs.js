import React from 'react';
import { Card, CardTitle, CardBodyText, CardFooter, CardImage } from '.';
import { ButtonSmall } from '../Button';

const SampleBodyText = `Discount applies to all vehicle categories. Prices displayed on the easyJet websites 
    include the discount where the offer is applicable. R`;
export default function CardDocs() {
    return (
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gridColumnGap: 10, alignItems: 'start' }}>
            <Card>
                <CardTitle>James Dean</CardTitle>
                <CardBodyText>{SampleBodyText}</CardBodyText>
                <CardFooter>Footer</CardFooter>
            </Card>

            <Card textAlign="center">
                <CardTitle>James Dean</CardTitle>
                <CardBodyText>
                    <p>{SampleBodyText}</p>
                    <ButtonSmall bg="primary" color="white" iconRight={true}>
                        View Full Profile
                    </ButtonSmall>
                </CardBodyText>
                <CardFooter>Footer</CardFooter>
            </Card>
            <Card textAlign="center">
                <CardImage />
                <CardTitle>James Dean</CardTitle>
                <CardBodyText>
                    <p>{SampleBodyText}</p>
                </CardBodyText>
                <CardFooter>Footer</CardFooter>
            </Card>
            <Card p={8}>
                <CardTitle>More Padding</CardTitle>
                <CardBodyText>{SampleBodyText}</CardBodyText>
                <CardFooter p={8} mx={-8} mb={-8} mt={4}>
                    Footer
                </CardFooter>
            </Card>
            <Card bg="secondary" borderRadius="small" boxShadow={20}>
                <CardTitle color="warning" fontWeight="normal">
                    Fancy secondary one
                </CardTitle>
                <CardBodyText color="white"> {SampleBodyText}</CardBodyText>
            </Card>
        </div>
    );
}
