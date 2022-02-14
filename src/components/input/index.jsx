import React from 'react';
import { FormGroup, FormControl, FormLabel, FormText } from './inputStyled';

const input = ({ value, label, name, handler, placeholder, color, onChange, onKeyDown }) => {
  return (
    <FormGroup>
      <FormLabel>{label}</FormLabel>
      <FormControl
        color={color}
        handler={handler}
        value={value}
        name={name}
        placeholder={placeholder}
        onChange={onChange}
        onKeyDown={onKeyDown}
      />
      
      <FormText handler={handler}>Kamu belum memasukkan infonya</FormText>
    </FormGroup>
  );
};

export default input;
