import React, { useState } from 'react';
import { HeaderWrap } from './headerStyles';

function Header (props) {
    const [heading, setHeading] = useState("");

    const headings = [
        'Choose a Date!',
        'Choose a Time!',
        'Start your test drive!'
    ];

    return (
        <HeaderWrap>
            <h1>Want to test Drive this Car?</h1>
            <p>{headings[0]}</p>
        </HeaderWrap>
    )
}

export default Header;