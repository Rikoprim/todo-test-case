import React from 'react';
import { Body, Navbar } from '../../components';
import { Form } from '../../pages';
import { useNavigate } from 'react-router-dom';

const AddTodo = () => {
  const navigate = useNavigate();

  const onGoBack = () => {
    navigate(-1)
  }

  return (
    <>
      <Navbar title='Add Todo' rightIcon={true} onClick={() => onGoBack()} />
      <Body>
        <Form />
      </Body>
    </>
  );
};

export default AddTodo;
