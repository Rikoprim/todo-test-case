import React, { useMemo, useReducer } from 'react';
import { Route, Routes } from 'react-router-dom';
import { Container, Toast } from '../components';
import { AddTodo, EditTodo, ListTodo } from '../views';

export const AuthContext = React.createContext();

const defaultState = {
  show: false,
  variant: 'success',
  message: ''
}

const Router = () => {
  const [state, dispatch] = useReducer(
    (prevState, action) => {
      switch (action.type) {
        case 'ENABLE_TOAST':
          return {
            ...prevState,
            show: action.show,
            variant: action.variant,
            message: action.message,
          }
        default:
          return action;
      }
    },
    {
      show: false,
      variant: 'success',
      message: '',
    }
  )

  const setToDefaultToast = () => {
    setTimeout(() => {
      dispatch({
        type: 'ENABLE_TOAST',
        ...defaultState
      });
    }, 500);
  }

  const authContext = useMemo(() => ({
    toasShow: async (data = { ...defaultState }) => {
      dispatch({
          type: 'ENABLE_TOAST',
          ...data
      });
    },
  }), [dispatch]);

  return (
    <Container>
      <Toast
        show={state.show}
        variant={state.variant}
        message={state.message}
        onClose={() => setToDefaultToast()} 
      />

      <AuthContext.Provider value={authContext}>
        <Routes>
          <Route path='/' element={ <ListTodo /> } />
          <Route path='/add-todo' element={ <AddTodo /> } />
          <Route path='/edit-todo' element={ <EditTodo /> } />
        </Routes>
      </AuthContext.Provider>
    </Container>
  );
};

export default Router;
