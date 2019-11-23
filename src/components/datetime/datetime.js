import React, { useState } from 'react';


import { DatetimeWrap, customTheme } from './datetimeStyles';

function Datetime (props) {
    return (
        <DatetimeWrap>
            <div className="formOne">
                <div className="date">

                </div>
                <div className="section">
                    <div className="heading">
                        <h1>Want to test Drive this Car?</h1>
                        <p>
                            Pick a time and we will prepare it.<br/>
                            No salespitch, no pressure. Just a simple drive!
                        </p>
                    </div> 
                    <div className="time">
                        <button onClick={e => props.handleTime(e)} value="10:00 AM">10:00 AM</button>
                        <button onClick={e => props.handleTime(e)} value="11:00 AM">11:00 AM</button>
                        <button onClick={e => props.handleTime(e)} value="12:00 PM">12:00 PM</button>
                        <button onClick={e => props.handleTime(e)} value="1:00 PM">1:00 PM</button>
                        <button onClick={e => props.handleTime(e)} value="2:00 PM">2:00 PM</button>
                        <button onClick={e => props.handleTime(e)} value="3:00 PM">3:00 PM</button>
                        <button onClick={e => props.handleTime(e)} value="4:00 PM">4:00 PM</button>
                        <button onClick={e => props.handleTime(e)} value="5:00 PM">5:00 PM</button>
                        <button onClick={e => props.handleTime(e)} value="6:00 PM">6:00 PM</button>
                    </div>
                </div>
            </div>
        </DatetimeWrap>
    )
}

export default Datetime;