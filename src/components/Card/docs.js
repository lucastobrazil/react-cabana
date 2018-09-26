import React from 'react';
import { Card, CardTitle, CardBodyText, CardFooter, CardImage } from '.';
import { ButtonSmall } from '../Button';

const SampleBodyText = `Discount applies to all vehicle categories. Prices displayed on the easyJet websites 
    include the discount where the offer is applicable. Restrictions may apply in some destinations. 
    Level of applicable discount is variable and can depend on (but is not limited to) such criteria as date of rental and location. 
    Maximum levels of discount are not available at all locations on all dates. 
    See cars.easyJet.com for further details. Travel Insurance provided by Zurich:`;
export default function CardDocs() {
    return (
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gridColumnGap: 10 }}>
            <Card textAlign="center">
                <CardTitle>James Dean</CardTitle>
                <CardBodyText lineHeight={1.4}>{SampleBodyText}</CardBodyText>
                <CardFooter>Footer</CardFooter>
            </Card>

            <Card p={1} textAlign="center">
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
        </div>
    );
}
