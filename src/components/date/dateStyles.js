import styled from 'styled-components';
import { colors, fonts, media } from '../../vars';
import { createMuiTheme } from '@material-ui/core';

export const DateWrap = styled.div`
    position: relative;
    width: 100hw;
    height: 100vh;
    background-color: #000;
    opacity: 0.7;
    z-index: 1;
    display: flex;
    justify-content: center;
    align-items: center;

    .formOne {
        // width: 100px;
        // height: 100px;
        position: fixed;
        // border: 1px solid white;
        // background-color: white;
        z-index: 2;
        display: flex;
        flex-flow: column nowrap;
        justify-content: center;
        align-items: center;

        ${media.largeTb} {
            // flex-flow: row nowrap;
        }
    
        .date {
            margin-top: 14px;
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