import React from 'react';
import Tabs from '.';

export default function TabsDocs() {
    return (
        <div>
            <Tabs>
                <div label="Movies">
                    See ya later, <em>Alligator</em>!
                </div>
                <div label="Music">
                    After 'while, <em>Crocodile</em>!
                </div>
                <div label="Photos">
                    Nothing to see here, this tab is <em>extinct</em>!
                </div>
            </Tabs>
        </div>
    );
}
