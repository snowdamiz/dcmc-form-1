import React from 'react';
import { CloseBtnWrap } from './closeBtnStyles';
import CloseIMG from '../../assets/close.svg';

function CloseBtn () {
    return (
        <CloseBtnWrap>
            <img src={CloseIMG} />
        </CloseBtnWrap>
    )
}

export default CloseBtn;