import React from 'react';
import { DateWrap, customTheme } from './datetimeStyles';

import { MuiPickersUtilsProvider, DatePicker } from '@material-ui/pickers';
import MomentUtils from '@date-io/moment';
import { MuiThemeProvider } from '@material-ui/core';
import Dheader from '../header/Dheader';

function DateTime (props) {
    return (
        <DateWrap>
            <div className="formOne">
                <Dheader page={props.page} />
                <div className="date">
                    <MuiThemeProvider theme={customTheme}>
                        <MuiPickersUtilsProvider utils={MomentUtils}>
                            <DatePicker value={props.date} onChange={props.setDate} variant="static" />
                        </MuiPickersUtilsProvider>
                    </MuiThemeProvider>
                </div>
            </div>
        </DateWrap>
    )
}

export default DateTime;