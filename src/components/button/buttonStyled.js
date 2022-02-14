import styled from 'styled-components';
import colors from '../color';

export const Button = styled.button`
    border-radius: 8px;
    background-color: ${({color}) => colors(color)};
    border-color: ${({color}) => colors(color)};
    text-align: center;
    vertical-align: middle;
    font-weight: 500;
    border: 1px solid transparent;
    padding: 12px 16px;
    font-size: 16px;
    line-height: 1.5;
    color: #fff;
    display: block;
    width: 100%;
    cursor: pointer;

    &:hover {
        background-color: #00a8a8;
        border-color: #00a8a8;
    }
`