import React from 'react';
import { DetailsWrap } from './detailsStyles';

import Back from '../../assets/back.svg';
import CloseBtn from '../closeBtn/closeBtn';

function Details (props) {
    return (
        <DetailsWrap>
            <div className="formThree">
                <div className="section">
                    <CloseBtn />
                    <p>Complete the form <br/>below to schedule</p>
                    <input className="frmInput" type="text" placeholder="Name" onChange={props.handleName} />
                    <input className="frmInput" type="text" placeholder="Email" onChange={props.handleEmail} />
                    <input className="frmInput" type="text" placeholder="Phone" onChange={props.handlePhone} />
                    <div className="btns">
                        <div className="backBtn" onClick={props.handleBack}>
                            <img src={Back} />
                        </div>
                        <button className="submit" onClick={props.handleSubmit}>Schedule</button>
                    </div>
                </div>
            </div>
        </DetailsWrap>
    )
}

export default Details;