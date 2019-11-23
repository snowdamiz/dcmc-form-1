import styled from 'styled-components';
import { colors, fonts, media } from '../../vars';

export const HeaderWrap = styled.div`
    width: 310px;
    background-color: ${colors.white};

    h1 {
        line-height: 34px;
        text-align: center;
        padding: 20px 20px 5px 20px;
    }

    p {
        padding: 5px 16px 20px 16px;
        text-align: center;
    }
`;