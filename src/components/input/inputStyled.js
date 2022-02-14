import styled from 'styled-components';
import colors from '../color';

export const FormGroup = styled.div`
    margin-bottom: 1rem;
`
export const FormLabel = styled.label`
    display: inline-block;
    margin-bottom: 0.5rem;
    font-size: 13px;
    color: #828282;
    font-weight: 400;
    letter-spacing: 0.5px;
`
export const FormControl = styled.input`
    display: block;
    width: 100%;
    position: relative;
    font-size: 15px;
    padding: 12px 16px;
    border-radius: 8px;
    height: 100%;
    background-clip: padding-box;
    border: 1px solid ${({handler}) => (handler === true ? '#dc3545' : '#ced4da')};
    background-color: #fff;
    font-weight: 400;
    line-height: 1.5;

    &:focus {
        border-color: ${({color}) => colors(color)};
    }
`
export const FormText = styled.p`
    margin-top: 0.25rem;
    font-size: .875em;
    color: #dc3545;
    display: ${({handler}) => (handler === true ? 'block' : 'none')};
`