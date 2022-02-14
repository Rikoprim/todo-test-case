import styled from 'styled-components';

export const Button = styled.div`
    cursor: pointer;
    position: absolute;
    bottom: 85px;
    right: 20px;
    height: 60px;
    width: 60px;
    background-color: rgb(255, 255, 255);
    border-radius: 50%;
    box-shadow: rgb(0 0 0 / 46%) 4px 7px 24px -7px;
    margin: 17px;
`
export const ButtonWrapper = styled.div`
    position: absolute;
    left: 50%;
    top: 60%;
    transform: translate(-50%, -50%);
`
export const ButtonIcon = styled.div`
    font-size: 42px;
    color: #00B5B5;
`