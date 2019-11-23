import styled from 'styled-components';
import { colors, fonts, media } from '../../vars';
import Banner from '../../assets/carkeys.jpg';

export const DetailsWrap = styled.div`
    position: relative;
    width: 100hw;
    height: 100vh;
    background-color: #000;
    opacity: 0.7;
    z-index: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 20px 0;

    .formTwo {
        position: fixed;
        border: 1px solid white;
        background-color: white;
        z-index: 2;
        display: flex;
        flex-flow: column nowrap;
        justify-content: center;
        align-items: center;
        width: 310px;
        padding: 0;
        margin: 0;

        ${media.largeTb} {
            flex-flow: row nowrap;
        }

        .image {
            height: 300px;
            width: 312px;
            background: url(${Banner}) center;
            background-size: cover;
            padding: 0;
            margin: 0;
            border: none;

            // img {
            //     width: 100%;
            //     height: 300px;
            // }
        }

        .section {
            // border: 1px solid blue;
            display: flex;
            flex-flow: column nowrap;
            justify-content: center;
            align-items: center;
            padding: 30px 0;

            ${media.largeTb} {
                padding: 30px 30px;
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