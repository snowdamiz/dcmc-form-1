import styled from 'styled-components';
import { colors, fonts, media } from '../../vars';

export const TimeWrap = styled.div`
    position: relative;
    width: 100hw;
    height: 100vh;
    background-color: #000;
    opacity: 0.7;
    z-index: 1;
    display: flex;
    justify-content: center;
    align-items: center;

    .formTwo {
        width: 310px;
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

        .buttons {
            background-color: ${colors.white};
            width: 100%;
            margin-top: 15px;
            display: flex;
            flex-flow: row wrap;
            justify-content: center;
            align-items: center;
            padding: 40px 0;

            button {
                margin: 10px;
                width: 110px;
                height: 35px;        
                border: none;
                color: ${colors.black};
                background-color: transparent;
                box-shadow: 1px 2px 5px ${colors.shadow};
                cursor: pointer;

                &:hover {
                    background-color: ${colors.primary};
                    color: ${colors.white};
                }
            }
        }
`;