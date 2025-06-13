import { createSlice } from '@reduxjs/toolkit'

const counterSlice = createSlice({
   name: 'counterSlice', //슬라이스 이름 지정(보통은 const로 지정한 변수이름이랑 똑같이 함)
   initialState: { value: 0 },
   reducers: {
      up: (state, action) => {
         state.value += action.payload
      },
      down: (state, action) => {
         state.value -= action.payload
      },
      reset: (state, action) => {
         state.value = 0
      },
   },
})

export default counterSlice.reducer
//reducer를 내보냄 (꼭 .reducer 붙여서!)

export const { up, down, reset } = counterSlice.actions
//reducer 안에서 정의한 up, down 함수를 내보냄
