import React from 'react';
import { DetailsWrap } from './detailsStyles';
import Banner from '../../assets/carkeys.jpg';

function Details (props) {
    return (
        <DetailsWrap>
            <div className="formTwo">
                <div className="image">
                </div>
                <div className="section">
                    <input type="text" placeholder="Name" onChange={props.handleName} />
                    <input type="text" placeholder="Email" onChange={props.handleEmail} />
                    <input type="text" placeholder="Phone" onChange={props.handlePhone} />
                    <div className="btns">
                        <div className="backBtn" onClick={props.handleBack}></div>
                        <button className="submit">Schedule</button>
                    </div>
                </div>
            </div>
        </DetailsWrap>
    )
}

export default Details;