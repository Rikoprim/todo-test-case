import styled from 'styled-components';

export const Row = styled.div`
    display: flex;
    align-items: end;
`
export const IconWrapper = styled.div`
    flex: 0 0 10px;
    text-align: center;
    cursor: pointer;
    margin-right: 10px;
`
export const Scroll = styled.div`
    overflow: auto;
    max-height: calc(100vh - 200px);
    padding-top: 10px;
    margin-top: 20px;
`