import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { getPlaying, getPlayingDetails } from '../api/playingApi'

export const fetchPlaying = createAsyncThunk('playlist/fetchPlaying', async () => {
   const response = await getPlaying()
   return response
})

export const fetchPlayingDetails = createAsyncThunk('playlist/fetchPlayingDetails', async (programId) => {
   const response = await getPlayingDetails(programId)
   return response
})

const playingSlice = createSlice({
   name: 'playings',
   initialState: {
      programs: [],
      programDetails: [],
      loading: false,
      error: null,
   },
   reducers: {},
   extraReducers: (builder) => {
      builder
         .addCase(fetchPlaying.pending, (state) => {
            state.loading = true
         })
         .addCase(fetchPlaying.fulfilled, (state, action) => {
            state.loading = false
            state.programs = action.payload
         })
         .addCase(fetchPlaying.rejected, (state, action) => {
            state.loading = false
            state.error = action.error.message
         })
         .addCase(fetchPlayingDetails.pending, (state) => {
            state.loading = true
            state.error = null
         })
         .addCase(fetchPlayingDetails.fulfilled, (state, action) => {
            state.loading = false
            state.programDetails = action.payload
         })
         .addCase(fetchPlayingDetails.rejected, (state, action) => {
            state.loading = false
            state.error = action.error.message
         })
   },
})

export default playingSlice.reducer
