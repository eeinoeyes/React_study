import { createSlice } from '@reduxjs/toolkit'

const counterSlice = createSlice({
   name: 'counterSlice',
   initialState: { value: 0 },
   reducers: {
      up: (state, action) => {
         state.value += action.payload
      },
      down: (state, action) => {
         state.value -= action.payload
      },
   },
})

export default counterSlice.reducer
export const { up, down } = counterSlice.actions
