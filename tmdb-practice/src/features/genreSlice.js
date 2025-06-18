import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { getGenres } from '../api/genreApi'

export const fetchGenres = createAsyncThunk('genres/fetchGenres', async () => {
   const response = await getGenres()
   return response.data.genres
})

const genreSlice = createSlice({
   name: 'genres',
   initialState: {
      genre: [],
      loading: false,
      error: null,
   },
   reducers: {},
   extraReducers: (builder) => {
      builder
         .addCase(fetchGenres.pending, (state) => {
            state.loading = true
         })
         .addCase(fetchGenres.fulfilled, (state, action) => {
            state.loading = false
            state.genre = action.payload
         })
         .addCase(fetchGenres.rejected, (state, action) => {
            state.loading = false
            state.error = action.error.message
         })
   },
})
export default genreSlice.reducer
