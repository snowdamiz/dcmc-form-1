import React from 'react';
import Header from '../header/header';
import { DetailsWrap } from './detailsStyles';

import Back from '../../assets/back.svg';
import CloseBtn from '../closeBtn/closeBtn';

function Details (props) {
    return (
        <DetailsWrap>
            <div className="formThree">
                <Header page={props.page} />
                <div className="section">
                    {/* <CloseBtn />
                    <p>Complete the form <br/>below to schedule</p> */}
                    {props.nameErr ? <label>Enter a valid name</label> : null }
                    <input className="frmInput" type="text" placeholder="Name" onChange={props.handleName} />
                    {props.emailErr ? <label>Enter a valid email address</label> : null }
                    <input className="frmInput" type="text" placeholder="Email" onChange={props.handleEmail} />
                    {props.phoneErr ? <label>Enter a valid phone number</label> : null }
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