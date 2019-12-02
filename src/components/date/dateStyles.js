import styled from 'styled-components';
import { colors, fonts, media } from '../../vars';
import { createMuiTheme } from '@material-ui/core';

export const DateWrap = styled.div`
    position: fixed;
    width: 100%;
    height: 100%;
    // background-color: #000;
    // opacity: 0.7;
    z-index: 1100;
    display: flex;
    justify-content: center;
    align-items: center;
    // border: 1px solid red;

    .formOne {
        // width: 100px;
        // height: 100px;
        position: fixed;
        // border: 1px solid white;
        // background-color: white;
        z-index: 1101;
        display: flex;
        flex-flow: column nowrap;
        justify-content: center;
        align-items: center;
        box-shadow: 0 0 100px #585858;

        ${media.largeTb} {
            // flex-flow: row nowrap;
        }
    
        .date {
            // margin-top: 15px;
        }
    }
`;

export const customTheme = createMuiTheme({
    palette: {
        primary: {
            main: '#0076b9',
            dark: '#005E93',
            light: '#0076b9'
        },
        secondary: {
            main: '#0076b9',
        }
    }
});