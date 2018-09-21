import React, { Fragment } from 'react';
import NotificationBar from '.';

export default function NotificationBarDocs() {
    return (
        <Fragment>
            <NotificationBar mb={1} content="Oops! There seems to be an error" bg="error" color="white" />
            <NotificationBar mb={1} content="Have you saved your work?" bg="warning" color="black" />
            <NotificationBar mb={1} content="Oh yes! Settings have been saved" bg="success" color="white" />
            <NotificationBar mb={1} content="Oh yes! Settings have been saved" bg="primary" color="white" dismissable={false} />
            <NotificationBar boxShadow={20} m={3} icon={false} fontSize="tiny" content="W3Schools is optimized for learning, testing, and training. Examples might be simplified to improve reading and basic understanding. Tutorials, references, and examples are constantly reviewed to avoid errors, but we cannot warrant full correctness of all content. While using this site, you agree to have read and accepted our terms of use, cookie and privacy policy. Copyright 1999-2018 by Refsnes Data. All Rights Reserved." bg="success" color="white" />
        </Fragment>
    );
}
