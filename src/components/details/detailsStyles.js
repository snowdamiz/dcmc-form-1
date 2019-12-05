import styled from 'styled-components';
import { colors, fonts, media } from '../../vars';

export const DetailsWrap = styled.div`
    &&& {
        position: absolute;
        width: 100%;
        height: 100%;
        // background-color: #000;
        // opacity: 0.7;
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
            box-shadow: 0 0 100px #585858;
    
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

                label {
                    font-size: 12px;
                    font-weight: 600;
                    font-family: ${fonts.primary};
                    color: red;
                    text-align: left;
                }
    
                .frmInput {
                    width: 220px !important;
                    height: 26px !important;
                    border: 1px solid ${(props) => props.err ? 'red' : '#D7D7D7'} !important;
                    // border: none;
                    color: ${colors.black} !important;
                    background-color: #EDEDED !important;
                    padding: 10px !important;
                    font-size: 17px !important;
                    margin: 8px 0 !important;
                    
                    &:focus::placeholder{
                        color:transparent !important;
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
                        width: 40px !important;
                        height: 40px !important;
                        background-color: ${colors.primary} !important;
                        cursor: pointer !important;
                        display: flex !important;
                        justify-content: center !important;
                        align-items: center !important;
    
                        img {
                            width: 22px !important;
                            height: 20px !important;
                        }
    
                        &:hover {
                            background-color: ${colors.primaryDark} !important;
                        }
                    }
    
                    .submit {
                        width: 190px !important;
                        height: 40px !important;
                        border: 1px solid ${colors.primary} !important;
                        background-color: ${colors.primary} !important;
                        font-size: 16px !important;
                        color: ${colors.white} !important;
                        cursor: pointer !important;
    
                        &:hover {
                            background-color: ${colors.primaryDark} !important;
                        }
                    }
                }
            }
        }
    }
`;