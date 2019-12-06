import styled from 'styled-components';
import { colors, fonts, media } from '../../vars';

export const HeaderWrap = styled.div`
    width: 310px;
    background-color: ${colors.white};

    h1 {
        line-height: 32px;
        text-align: center;
        padding: 30px 30px 20px 30px;
        font-family: ${fonts.primary};
        color: ${colors.black};
        font-size: 25px;
    }

    p {
        padding: 5px 16px 20px 16px;
        text-align: center;
    }
`;