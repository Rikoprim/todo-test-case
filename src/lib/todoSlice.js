import Axios from 'axios';
import { createAsyncThunk, createSelector, createSlice } from '@reduxjs/toolkit'

export const getTodos = createAsyncThunk(
  'todo/getTodos',
  async (_, thunkAPI) => {
    try {
      const response = await Axios({
        method: 'get',
        url: 'https://virtserver.swaggerhub.com/hanabyan/todo/1.0.0/to-do-list'
      });
      return response.data
    } catch(error) {
      return thunkAPI.rejectWithValue({ error: error.message })
    }
  }
)

const todoSlice = createSlice({
  name: 'todo',
  initialState: {
    todos: [],
    loading: false,
    error: null,
    editTodo: null,
    tempTodos: []               // Temporary Data
  },
  reducers: {
    addTodos(state, action) {
      state.todos.push(action.payload)
      state.tempTodos.push(action.payload)
    },

    insertTodos(state, action) {
      state.editTodo = action.payload
    },

    deleteEditTodos(state, action) {
      state.editTodo = null
    },

    deleteTodos(state, action) {
      const {id} = action.payload

      if (action.payload.status === 1) {
        state.error = "todo read"
      } else {
        const findID = state.todos.findIndex((item) => item.id === id)
        state.todos.splice(findID, 1)
        state.tempTodos.splice(findID, 1)
      }
    },

    EditTodos(state, action) {
      const {id, title, description} = action.payload

      const todoID = state.todos.find((item) => item.id === id)
      todoID.title = title
      todoID.description = description
      state.tempTodos = state.todos
    },

    FilterTodos(state, action) {
      if(action.payload === 'onRead') {
        let filters = state.tempTodos.filter((value) => value.status === 1)
        let sortDesc = filters.slice().sort((a,b) =>{                   // Sort by Desc
          return new Date(b.createdAt) - new Date(a.createdAt)
        })
        state.todos = sortDesc
      } else if (action.payload === 'onUnread') {
        let filters = state.tempTodos.filter((value) => value.status === 0)
        let sortAsc = filters.slice().sort((a,b) =>{                   // Sort by ASC
          return new Date(a.createdAt) - new Date(b.createdAt)
        })
        state.todos = sortAsc
      } else if (action.payload === 'onAll') {
        state.todos = state.tempTodos
      }
    },

    ChangeStatus(state, action) {
      const {id, status} = action.payload
      const todoID = state.todos.find((item) => item.id === id)
      const todoIDTemp = state.tempTodos.find((item) => item.id === id)

      if(status === 0) {
        todoID.status = 1
        todoIDTemp.status = 1
      } else {
        todoID.status = 0
        todoIDTemp.status = 0
      }
    },

    SearchTodosTitle(state, action) {
      let array = state.tempTodos
      let keyword = action.payload
      const searchTerm = keyword.toLowerCase()
      if (keyword !== '') {
        let filters = array.filter(value => {
          return value.title.toLowerCase().match(new RegExp(searchTerm, 'g'))
        })
        state.todos = filters
      } else if (keyword === '') {
        state.todos = state.tempTodos
      }
    }
  },
  extraReducers: {
    [getTodos.pending]: (state) => {
      state.todos = []
      state.tempTodos = []
      state.loading = true
    },
    [getTodos.fulfilled]: (state, action) => {
      state.todos = action.payload
      state.tempTodos = action.payload
      state.loading = false
    },
    [getTodos.rejected]: (state, action) => {
      state.loading = false
      state.error = action.payload.error
    }
  }
})

export const allTodos = createSelector(
  (state) => ({
    todos: state.todo.todos,
    loading: state.todo.loading,
    error: state.todo.error,
    editTodo: state.todo.editTodo,
    tempTodos: state.todo.tempTodos
  }),
  (state) => state
)

export const { addTodos, deleteTodos, insertTodos, deleteEditTodos, EditTodos, SearchTodosTitle, FilterTodos, ChangeStatus } = todoSlice.actions

export default todoSlice.reducer