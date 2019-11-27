import React, { useState } from 'react';
import { HeaderWrap } from './headerStyles';
import CloseBtn from '../closeBtn/closeBtn';

function Header (props) {
    const [heading, setHeading] = useState("");

    const headings = [
        'Choose a Date!',
        'Choose a Time!',
        'Start your test drive!'
    ];

    return (
        <HeaderWrap>
            <CloseBtn />
            <h1>Want to test Drive this Car?</h1>
            <p>{headings[0]}</p>
        </HeaderWrap>
    )
}

export default Header;