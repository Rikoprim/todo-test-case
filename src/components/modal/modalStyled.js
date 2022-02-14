import styled from 'styled-components';

export const ModalContainer = styled.div`
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: rgba(54, 61, 74, 0.3);
    opacity: 0;
    visibility: hidden;
    transition: all 0.2s ease;
    z-index: 1000;

    ${({show}) => show && `
        visibility: visible;
        opacity: 1;
    `}
`
export const Modal = styled.div`
    background-color: #fff;
    width: calc(20rem + 15vw);
    height: auto;
    border-radius: 15px;
    backdrop-filter: blur(5px);
    box-shadow: 0 0 0.8rem 0 rgba(0, 0, 0, 0.15);
    transform: translateY(-600px);
    transition: all 0.4s ease;

    ${({show}) => show && `
        transform: translateY(0);
    `}
`
export const ModalWrapper = styled.header`
    padding: 15px;
`
export const ModalHeader = styled.header`
    position: relative;
    margin-top: 20px;
`
export const ModalTitle = styled.h3`
    text-align: center;
    margin: 0;
`
export const BtnClose = styled.div`
    position: absolute;
    top: 15px;
    right: 15px;
    font-size: 25px;
    cursor: pointer;
`
export const ModalContent = styled.main`
    text-align: center;
`
export const ModalFooter = styled.footer`
    margin-top: 24px;
`
export const BtnAction = styled.button`
    padding-top: 15px;
    padding-bottom: 15px;
    font-weight: 600;
    color: #9F9F9F;
    display: block;
    width: 100%;
    text-align: center;
    background-color: transparent;
    border: 1px solid transparent;
    font-size: 1rem;
    line-height: 1.5;
    cursor: pointer;

    &:hover {
        color: #2F80ED;
    }
`
export const Devider = styled.hr`
    margin: 0;
    border: 0;
    border-top: 1px solid rgba(0, 0, 0, 0.1);
`