import { configureStore } from '@reduxjs/toolkit'
import multipleSlice from './multipleSlice'

const multipleStore = configureStore({
   reducer: {
      multiple: multipleSlice,
   },
})

export default multipleStore
