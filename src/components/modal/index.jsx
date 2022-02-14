import React from 'react'
import { IoClose } from 'react-icons/io5';
import {
  BtnClose, 
  Modal,
  ModalWrapper, 
  ModalContainer, 
  ModalContent, 
  ModalFooter, 
  ModalHeader, 
  ModalTitle } from './modalStyled';

const modals = ({ show, close, title, description, children}) => {
  return (
    <ModalContainer show={show ? show : ""} onClick={() => close()}>
      <Modal show={show ? show : ""}>
        <ModalWrapper>
          <BtnClose onClick={() => close()}>
            <IoClose />
          </BtnClose>
          <ModalHeader>
            <ModalTitle>{title}</ModalTitle>
          </ModalHeader>
          <ModalContent>{description}</ModalContent>
        </ModalWrapper>
        <ModalFooter>
          {children}
        </ModalFooter>
      </Modal>
    </ModalContainer>
  )
}

export default modals