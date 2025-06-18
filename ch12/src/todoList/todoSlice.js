import { createSlice } from '@reduxjs/toolkit'

const todoSlice = createSlice({
   name: 'todos',
   initialState: [],
   reducers: {
      add: (state, action) => {
         state.push({ id: Date.now(), text: action.payload })
      },
      remove: (state, action) => {
         return state.filter((todo) => todo.id !== action.payload)
         // .filter, .map 등 사용할 때 return이 꼭 붙어야 함
      },
   },
})

export default todoSlice.reducer
export const { add, remove } = todoSlice.actions
