import styled from 'styled-components';
import { colors, fonts, media } from '../../vars';
import { createMuiTheme } from '@material-ui/core';

export const DateWrap = styled.div`
    border: 1px solid red;
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