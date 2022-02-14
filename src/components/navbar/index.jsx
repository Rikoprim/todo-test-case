import React from 'react';
import { BtnBack, Navbar, NavbarBrand, Row } from './navbarStyled';
import { IoArrowBackOutline } from 'react-icons/io5';

const defaultProps = {
  title: '',
  rightIcon: false,
  onClick: () => null,
}
const navbar = (props = { ...defaultProps }) => {
  return (
    <Navbar>
      <Row>
        <NavbarBrand>{props.title}</NavbarBrand>
        <BtnBack onClick={props.onClick}>
          {
            props.rightIcon !== true ? props.rightIcon :
            <IoArrowBackOutline />
          }
        </BtnBack>
      </Row>
    </Navbar>
  );
};

export default navbar;
