import React from 'react';
import { MuiPickersUtilsProvider, DatePicker } from '@material-ui/pickers';
import MomentUtils from '@date-io/moment';
import { MuiThemeProvider } from '@material-ui/core';
import Header from '../header/header';

import { DateWrap, customTheme } from './dateStyles';

function Datee (props) {
    return (
        <DateWrap>
            <div className="formOne">
                <Header page={props.page} />
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

export default Datee;