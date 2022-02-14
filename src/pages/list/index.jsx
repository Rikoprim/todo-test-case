import React, { useContext, useState } from 'react';
import { Search, Card, ButtonAdd, Loader, Modal, Dropdown, Error } from '../../components'
import { AuthContext } from '../../router';
import { useNavigate } from 'react-router-dom';
import { Row, IconWrapper } from './listStyled';
import { useDispatch, useSelector } from 'react-redux';
import { allTodos, ChangeStatus, deleteTodos, FilterTodos, insertTodos, SearchTodosTitle } from '../../lib/todoSlice';
import { BtnAction, Devider } from '../../components/modal/modalStyled';
import { DropdownDevider, DropdownItem } from '../../components/dropdown/dropdownStyled';

const List = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { todos, error, loading } = useSelector(allTodos)
  const [modalDetail, setModalDetail] = useState(false);
  const { toasShow } = useContext(AuthContext);
  const [detail, setDetail] = useState({
    id: '',
    title: '',
    description: '',
    status: ''
  })

  const onModalDetail = (val) => {
    if (val) {
      setDetail(val)
    }
    setModalDetail(!modalDetail)
  };

  const addTodo = () => {
    navigate('/add-todo')
  };

  const onUpdate = () => {
    dispatch(insertTodos(detail))
    navigate('/edit-todo')
  }

  const onDelete = () => {
    if (detail.status === 1) {
      toasShow({
        show: true,
        variant: 'error',
        message: 'Delete gagal, Todo sudah selesai',
      });
    } else {
      dispatch(deleteTodos(detail))
      toasShow({
        show: true,
        variant: 'success',
        message: 'Delete todo Sukses',
      });
    }
  }

  const onChangeHandler = async (e) => {
    let value = e.target.value;
    await dispatch(SearchTodosTitle(value))
  };

  const filterData = async (val) => {
    await dispatch(FilterTodos(val))
  };

  const onChangeStatus = () => {
    dispatch(ChangeStatus(detail))
  }

  return (
    <>
    <Row>
      <Search 
        type='text' 
        placeholder='Cari nama todo...'
        onChange={onChangeHandler}
      />
      <IconWrapper>
        <Dropdown>
          <DropdownItem onClick={() => filterData('onRead')}>Selesai</DropdownItem>
          <DropdownDevider></DropdownDevider>
          <DropdownItem onClick={() => filterData('onUnread')}>Belum Selesai</DropdownItem>
          <DropdownDevider></DropdownDevider>
          <DropdownItem onClick={() => filterData('onAll')}>Semua</DropdownItem>
        </Dropdown>
      </IconWrapper>
    </Row>

    {
      loading ? (
        <Loader />
      ) : (
        <>
        {
          todos.map((item, key) => (
            <Card 
              key={key}
              title={item.title}
              text={item.createdAt}
              status={item.status}
              onModalDetail={() => onModalDetail(item)}
            />
          ))
        }
        { error && <Error />}
        </>
      )
    }
    <ButtonAdd onClick={addTodo} />

    <Modal show={modalDetail} close={onModalDetail} description={detail.description} title={detail.title}>
      <Devider />
      <BtnAction onClick={onChangeStatus}>{detail.status === 1? 'Tandai Belum Selesai' : 'Tandai Sudah Selesai'}</BtnAction>
      <Devider />
      <BtnAction onClick={() => onUpdate()}>Update</BtnAction>
      <Devider />
      <BtnAction onClick={() => onDelete()}>Delete</BtnAction>
    </Modal>
    </>
  );
};

export default List;
