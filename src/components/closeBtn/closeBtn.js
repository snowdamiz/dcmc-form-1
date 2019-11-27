import React from 'react';
import ReactDOM from 'react-dom';
import { CloseBtnWrap } from './closeBtnStyles';
import CloseIMG from '../../assets/close.svg';

function CloseBtn () {
    const CloseApp = () => {
        ReactDOM.unmountComponentAtNode(document.getElementById('root'));
    }

    return (
        <CloseBtnWrap>
            <img src={CloseIMG} onClick={CloseApp} />
        </CloseBtnWrap>
    )
}

export default CloseBtn;