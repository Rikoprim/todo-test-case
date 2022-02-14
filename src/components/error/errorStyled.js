import styled from 'styled-components';

export const ErrorContainer = styled.div`
    text-align: center;
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    transform: -webkit-translate(-50%, -50%);
    transform: -moz-translate(-50%, -50%);
    transform: -ms-translate(-50%, -50%);
`
export const ErrorImage = styled.img`
    width: 120px;
    height: 120px
`
export const ErrorText = styled.div`
    margin-top: 15px;
    font-weight: 500;
    font-size: 20px;
    color: #111111;
`
export const ErrorDesc = styled.div`
    font-weight: normal;
    font-size: 14px;
    margin-top: 10px;
    color: #9F9F9F;
`