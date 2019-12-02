import styled from 'styled-components';
import { colors, fonts, media } from '../../vars';

export const DetailsWrap = styled.div`
    position: fixed;
    width: 100%;
    height: 100%;
    background-color: #000;
    opacity: 0.7;
    z-index: 1000;
    display: flex;
    justify-content: center;
    align-items: center;
    // padding: 20px 0;

    .formThree {
        position: fixed;
        border: 1px solid white;
        background-color: white;
        z-index: 1101;
        display: flex;
        flex-flow: column nowrap;
        justify-content: center;
        align-items: center;
        width: 310px;
        padding: 0;
        margin: 0;

        .section {
            // border: 1px solid blue;
            display: flex;
            flex-flow: column nowrap;
            justify-content: center;
            align-items: center;
            padding: 15px 0 30px 0;

            ${media.largeTb} {
                padding: 30px 30px;
            }

            p {
                font-family: ${fonts.primary};
                line-height: 26px;
                font-size: 20px
                text-align: center;
                font-weight: bold;
                // color: ${colors.black};
                padding: 5px 0;
            }

            input {
                width: 220px;
                height: 26px;
                border: 1px solid #D7D7D7;
                // border: none;
                color: ${colors.black};
                background-color: #EDEDED;
                padding: 10px;
                font-size: 17px;
                margin: 8px 0;
                
                &:focus::placeholder{
                    color:transparent;
               }
            }

            .btns {
                // border: 1px solid red;
                display: flex;
                flex-flow: row nowrap;
                justify-content: space-between;
                align-items: center;
                width: 242px;
                margin-top: 10px;

                .backBtn {
                    width: 40px;
                    height: 40px;
                    background-color: ${colors.primary};
                    cursor: pointer;
                    display: flex;
                    justify-content: center;
                    align-items: center;

                    img {
                        width: 22px;
                        height: 20px;
                    }

                    &:hover {
                        background-color: ${colors.primaryDark};
                    }
                }

                .submit {
                    width: 190px;
                    height: 40px;
                    border: 1px solid ${colors.primary};
                    background-color: ${colors.primary};
                    font-size: 16px;
                    color: ${colors.white};
                    cursor: pointer;

                    &:hover {
                        background-color: ${colors.primaryDark};
                    }
                }
            }
        }
    }
`;