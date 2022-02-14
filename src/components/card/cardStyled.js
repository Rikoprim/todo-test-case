import styled from 'styled-components';

export const Card = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    min-width: 0;
    word-wrap: break-word;
    background-color: #fff;
    background-clip: border-box;
    border: none;
    border-radius: 8px;
    box-shadow: 0px 6px 32px rgb(88 88 88 / 4%);
    margin-top: 15px;
    margin-bottom: 15px;
    cursor: pointer;
`
export const CardBody = styled.div`
    min-height: 1px;
    padding: 1.25rem;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`
export const CardTitle = styled.p`
    margin-bottom: 0.5rem;
    font-size: 18px;
    font-weight: 400;
`
export const CardIcon = styled.div`

`
export const CardFooter = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: 0.3rem 1.25rem;
    border-top: 1px solid rgba(0, 0, 0, 0.125);
`
export const CardText = styled.p`
    font-size: 12px;
    line-height: 18px;
`