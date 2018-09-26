import React from 'react';
import Tooltip from './';

export default function TooltipDocs() {
    return (
        <Tooltip content="Here is my tooltip!" bg="primary" color="papayawhip">
            <a>Tooltip here.</a>
        </Tooltip>
    );
}
