import React from 'react';
import { DatetimeWrap } from './datetimeStyles';

function Datetime (props) {
    return (
        <DatetimeWrap> 
            <button onClick={props.handleClick} />
        </DatetimeWrap>
    )
}

export default Datetime;