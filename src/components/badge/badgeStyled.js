import styled from 'styled-components';
import colors from '../color';

export const Badge = styled.div`
    height: 100%;
    color: #fff;
    background-color: ${({color}) => colors(color)};
    padding: 4px 15px;
    border-radius: 100px;
    font-size: 13px;
    line-height: 18px;
    font-weight: 400;
    text-align: center;
    white-space: nowrap;
    vertical-align: baseline;
    margin-top: 7px;
`