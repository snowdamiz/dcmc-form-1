import styled from 'styled-components';
import { colors, fonts, media } from '../../vars';
import { createMuiTheme } from '@material-ui/core';

export const DatetimeWrap = styled.div`
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
        background-color: white;
        z-index: 2;
        display: flex;
        flex-flow: column nowrap;
        justify-content: center;
        align-items: center;

        ${media.largeTb} {
            flex-flow: row nowrap;
        }

        .date {
            border: 1px solid blue;
            // padding: 10px;
            
            // ${media.largeTb} {
            //     box-shadow: 2px 0px 6px ${colors.shadow};
            // }
        }

        .section {
            // border: 1px solid blue;
            padding: 10px;
            display: flex;
            flex-flow: column nowrap;
            justify-content: space-around;
            align-items: center;
            width: 340px;

            ${media.tablet} {
                width: 500px;

            }

            .heading {

            }

            .time {
                display: flex;
                flex-wrap: wrap;
                justify-content: center;
                align-items: center;
                // width: 90%;
                padding: 20px 0;
                // border: 1px solid red;

                ${media.tablet} {
                    width: 400px;
                }

                button {
                    margin: 8px;
                    width: 110px;
                    height: 30px;        
                    border: none;
                    color: ${colors.black};
                    background-color: transparent;
                    box-shadow: 0px 2px 5px ${colors.shadow};
                    cursor: pointer;

                    &:hover {
                        background-color: ${colors.primary};
                        color: ${colors.white};
                    }
                }
            }
        }
    }
`;

