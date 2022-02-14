import { configureStore } from '@reduxjs/toolkit'

import todoReducer from './lib/todoSlice'

export default configureStore({
  reducer: {
    todo: todoReducer,
  },
  devTools: true,
})