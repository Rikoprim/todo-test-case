import React from 'react';
import { Button } from './buttonStyled';

const button = ({ type, name, onClick, color}) => {
  return (
    <Button type={type} color={color} onClick={onClick}>{name}</Button>
  );
};

export default button;
