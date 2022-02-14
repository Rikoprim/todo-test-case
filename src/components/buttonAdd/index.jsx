import React from 'react';
import { IoAdd } from 'react-icons/io5';
import { Button, ButtonIcon, ButtonWrapper } from './buttonAddStyled';

const buttonAdd = ({ onClick }) => {
  return (
    <Button>
      <ButtonWrapper onClick={onClick}>
        <ButtonIcon>
          <IoAdd />
        </ButtonIcon>
      </ButtonWrapper>
    </Button>
  );
};

export default buttonAdd;
