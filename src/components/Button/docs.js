import React from 'react';
import { HeadingOne, SmallText } from '../Text';
import Box from '../Box';
import { Button, ButtonSmall, ButtonLarge, ButtonIcon } from '.';

/* 
    In the real world you would probably define your own Primary Buttons
    eg. const PrimaryButton = props => <Button bg="primary" color="white" />

    But out of the box we don't want to define that. 
    The buttons are just designed to be configured stylistically
    how you want.
*/

const primaryProps = {
    bg: 'primary',
    color: 'white',
};
export default function ButtonDocs() {
    return (
        <Box>
            <HeadingOne>ButtonDocs</HeadingOne>
            <table>
                <tbody>
                    <tr>
                        <td>
                            <SmallText>Plain</SmallText>
                        </td>
                        <td>
                            <ButtonSmall>Small</ButtonSmall>
                        </td>
                        <td>
                            <Button>Button</Button>
                        </td>
                        <td>
                            <ButtonLarge>Large</ButtonLarge>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <SmallText>Primary</SmallText>
                        </td>
                        <td>
                            <ButtonSmall {...primaryProps} mt={30}>
                                Small
                            </ButtonSmall>
                        </td>
                        <td>
                            <Button {...primaryProps}>Button</Button>
                        </td>
                        <td>
                            <ButtonLarge {...primaryProps}>Large</ButtonLarge>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <SmallText>Icon</SmallText>
                        </td>
                        <td>
                            <ButtonSmall {...primaryProps}>
                                <ButtonIcon fill="white" />
                                Small
                            </ButtonSmall>
                        </td>
                        <td>
                            <Button {...primaryProps}>
                                <ButtonIcon fill="white" />
                                Button
                            </Button>
                        </td>
                        <td>
                            <ButtonLarge {...primaryProps}>
                                <ButtonIcon fill="white" />
                                Button
                            </ButtonLarge>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <SmallText>Colourful</SmallText>
                        </td>
                        <td>
                            <ButtonSmall bg="error" color="white">
                                Small
                            </ButtonSmall>
                        </td>
                        <td>
                            <Button bg="success" color="error">
                                <ButtonIcon fill="white" />
                                Button
                            </Button>
                        </td>
                        <td>
                            <ButtonLarge bg="tertiary" color="warning">
                                <ButtonIcon fill="primary" />
                                Button
                            </ButtonLarge>
                        </td>
                    </tr>
                </tbody>
            </table>
        </Box>
    );
}
