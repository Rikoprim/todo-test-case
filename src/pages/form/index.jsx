import React, { useContext, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Button, FormInput } from '../../components'
import { ButtonFooter } from './formStyled';
import { addTodos, allTodos, deleteEditTodos, EditTodos } from '../../lib/todoSlice';
import { AuthContext } from '../../router';

const Form = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate();
  const { toasShow } = useContext(AuthContext);
  const [title, setTitle] = useState('')
  const [description, setDesc] = useState('')
  const [id, setID] = useState('')
  const [errorTitle, setErrorTitle] = useState(false)
  const [errorDesc, setErrorDesc] = useState(false)
  const { editTodo } = useSelector(allTodos)

  const onGoBack = () => {
    navigate(-1)
  }

  const GenerateID = () => {
    return Date.now()
  }

  const GetDateTime = () => {
    const d = new Date();
    let date = d.getFullYear()+'-'+(d.getMonth()+1)+'-'+d.getDate();
    let time = d.getHours() + ":" + d.getMinutes()
    return date+' '+time;
  }

  useEffect(() => {
    if (editTodo !== null) {
      setTitle(editTodo.title)
      setDesc(editTodo.description)
      setID(editTodo.id)
    }
  }, [editTodo])
  

  const onSave = async (e) => {
    setErrorTitle(false)
    setErrorDesc(false)
    e.preventDefault();

    if (title === '') {
      return setErrorTitle(true)
    } else if (description === '') {
      return setErrorDesc(true)
    }

    const data = {
      title: title,
      description: description,
      status: 0,
      createdAt: GetDateTime()
    }

    if (editTodo !== null) {
      data['id'] = id;
      dispatch(EditTodos(data))
      dispatch(deleteEditTodos())
      toasShow({
        show: true,
        variant: 'success',
        message: 'Update todo Sukses',
      });
    } else {
      data['id'] = GenerateID();
      dispatch(addTodos(data))
      toasShow({
        show: true,
        variant: 'success',
        message: 'Tambah todo Sukses',
      });
    }
    onGoBack()
  }
  return (
    <>
    <form onSubmit={onSave}>
      <FormInput
        onChange={e => setTitle(e.target.value)}
        handler={errorTitle}
        value={title || ''}
        label='Title' 
        placeholder='Title'
        color='primary' />
      <FormInput
        onChange={e => setDesc(e.target.value)}
        handler={errorDesc}
        value={description || ''}
        label='Description' 
        placeholder='Description' 
        color='primary' />

      <ButtonFooter>
        <Button type='submit' color={'info'} name={editTodo !== null ? 'Update' : 'Simpan'} />
      </ButtonFooter>
    </form>

    </>
  );
};

export default Form;
