import React from 'react'
import { useNavigate } from 'react-router-dom';
import { Form } from '../../pages';
import { Body, Navbar } from '../../components'
import { deleteEditTodos } from '../../lib/todoSlice';
import { useDispatch } from 'react-redux';

const EditTodo = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate();

  const onGoBack = () => {
    navigate(-1)
    dispatch(deleteEditTodos())
  }
  return (
    <>
    <Navbar title='Update Todo' rightIcon={true} onClick={() => onGoBack()} />
    <Body>
      <Form />
    </Body>
    </>
  )
}

export default EditTodo