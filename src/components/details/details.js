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
                    <input type="text" placeholder="Name" />
                    <input type="text" placeholder="Phone" />
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