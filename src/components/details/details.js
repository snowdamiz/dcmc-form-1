import React from 'react';
import { DetailsWrap } from './detailsStyles';

function Details (props) {
    return (
        <DetailsWrap>
            <div className="formThree">
                <div className="image">
                </div>
                <div className="section">
                    <input type="text" placeholder="Name" onChange={props.handleName} />
                    <input type="text" placeholder="Email" onChange={props.handleEmail} />
                    <input type="text" placeholder="Phone" onChange={props.handlePhone} />
                    <div className="btns">
                        <div className="backBtn" onClick={props.handleBack}></div>
                        <button className="submit" onClick={props.handleSubmit}>Schedule</button>
                    </div>
                </div>
            </div>
        </DetailsWrap>
    )
}

export default Details;