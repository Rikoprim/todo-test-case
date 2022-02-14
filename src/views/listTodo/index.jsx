import React from 'react';
import { Body, Navbar } from '../../components';
import { List } from '../../pages';

const ListTodo = () => {
  return (
    <>
    <Navbar title='Todo APP' rightIcon={false} />
    <Body>
      <List />
    </Body>
    </>
  );
};

export default ListTodo;
