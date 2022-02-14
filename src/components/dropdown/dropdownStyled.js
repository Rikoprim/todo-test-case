import styled from 'styled-components';

export const Dropdown = styled.div`
    position: relative;
`
export const DropdownWrapper = styled.div`
    position: absolute;
    top: 100%;
    left: 0;
    width: 300px;
    border: 1px solid rgba(0, 0, 0, 0.04);
    box-shadow: 0 16px 24px 2px rgba(0, 0, 0, 0.14);
`
export const DropdownMenu = styled.ul`
    z-index: 200;
    float: left;
    padding: 0.5rem 0;
    margin: 0.125rem 0 0;
    font-size: 1rem;
    color: #212529;
    text-align: left;
    list-style: none;
    background-color: #fff;
    background-clip: padding-box;
    border: 1px solid rgba(0, 0, 0, 0.15);
    position: absolute;
    will-change: transform;
    top: 0px;
    left: 0px;
    min-width: 7rem;
    border-radius: 8px;
    transform: translate3d(-90px, 20px, 0px);
`
export const Icon = styled.div`
    color: #BDBDBD;
    cursor: pointer;
`
export const DropdownItem = styled.li`
    text-align: center;
    font-size: 13px;
    font-weight: 400;
    cursor: pointer;
    padding: 5px 0;

    &:hover {
        background-color: #e9ecef;
    }
`
export const DropdownDevider = styled.hr`
    height: 0;
    margin: 0.5rem 0;
    overflow: hidden;
    border: 1px solid rgba(0,0,0,0.125);
`