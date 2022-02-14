import React from 'react';
import { Body } from './bodyStyled';

const body = ({ children }) => {
  return (
    <Body>
      {children}
    </Body>
  );
};

export default body;
