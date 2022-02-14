import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getTodos } from '../../lib/todoSlice';
import { Container } from './containerStyled';

const Containers = ({ children }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    (async () => {
      await dispatch(getTodos())
    })()
  }, [dispatch])

  return (
    <Container>
      {children}
    </Container>
  );
};

export default Containers;
