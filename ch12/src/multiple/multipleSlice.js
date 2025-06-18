import { createSlice } from '@reduxjs/toolkit'

const multipleSlice = createSlice({
   name: 'multiple',
   initialState: { value: 1 },
   reducers: {
      multiply: (state, action) => {
         state.value *= action.payload
      },
      reset: (state, action) => {
         state.value = 1
      },
   },
})
export default multipleSlice.reducer
export const { multiply, reset } = multipleSlice.actions
