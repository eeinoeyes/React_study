import { configureStore } from '@reduxjs/toolkit'
import playingReducer from '../features/playingSlice'
import genresReducer from '../features/genreSlice'
const store = configureStore({
   reducer: {
      playings: playingReducer,
      genres: genresReducer,
   },
})

export default store
