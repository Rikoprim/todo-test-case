import React from 'react';
import { Badge } from './badgeStyled';

const badge = ({name, color}) => {
  return (
    <Badge color={color}>{name}</Badge>
  );
};

export default badge;
