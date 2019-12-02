import styled from 'styled-components';
import { colors, fonts, media } from '../../vars';

export const TimeWrap = styled.div`
    && {
        position: fixed;
        width: 100%;
        height: 100%;
        // background-color: #000;
        // opacity: 0.7;
        z-index: 1000;
        display: flex;
        justify-content: center;
        align-items: center;
    
        .formTwo {
            width: 310px;
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
    
            .section {
                // margin-top: 15px;
    
                .box {
                    display: flex;
                    flex-flow: column nowrap;
                    justify-content: center;
                    align-items: center;
                    // border: 1px solid red;
                    height: 100px;
                    background-color: ${colors.primary};
    
                    h1 {
                        font-size: 26px;
                        text-align: center;
                        color: ${colors.white};
                    }
                }
    
                .buttons {
                    background-color: ${colors.white};
                    width: 100%;
                    height: 245px;
                    display: flex;
                    flex-flow: row wrap;
                    justify-content: center;
                    align-items: center;
                    padding: 30px 0;
        
                    button {
                        margin: 5px 6px 5px 6px;
                        width: 100px;
                        height: 35px;        
                        border: none;
                        color: ${colors.black};
                        border: 1px solid #D7D7D7;
                        background-color: #EDEDED;
                        // box-shadow: 1px 2px 5px ${colors.shadow};
                        cursor: pointer;
        
                        &:hover {
                            border: 1px solid ${colors.primary};
                            background-color: ${colors.primary};
                            color: ${colors.white};
                            font-weight: bold;
                        }
                    }
                }
            }
        }
    }

`;