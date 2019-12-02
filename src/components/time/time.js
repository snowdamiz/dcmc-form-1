import React from 'react';
import { TimeWrap } from './timeStyles';

import Header from '../header/header';

function Time (props) {
    return (
        <TimeWrap>
            <div className="formTwo">
                <Header />
                <div className="section">
                    <div className="box">
                        <h1>Choose your time</h1>
                    </div>
                    <div className="buttons">
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
        </TimeWrap>
    )
}

export default Time;