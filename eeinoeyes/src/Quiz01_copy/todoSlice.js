import { createSlice } from '@reduxjs/toolkit'

let nextId = 1
const todoSlice = createSlice({
   name: 'todos',
   initialState: [],
   reducers: {
      addTodo: (state, action) => {
         state.push({
            id: nextId++,
            value: action.payload,
         })
      },
      removeTodo: (state, action) => {
         return state.filter((todo) => todo.id !== action.payload)
      },
   },
})
export default todoSlice.reducer
export const { addTodo, removeTodo } = todoSlice.actions
