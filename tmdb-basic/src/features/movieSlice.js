import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { getMovies, getMovieDetails } from '../api/tmdbApi'

//createAsyncThunk : 비동기 thunk 액션 -> 영화 목록을 API로부터 가져옴
// 파라미터 : 1. 타입명(액션 이름), 2. async 비동기 함수
// 실제로 첫번째 파라미터는 pending / fulfilled / rejected 세가지로 나눠짐
//이름 짓는 법? : Slice 이름 / const로 정의한 변수명
export const fetchMovies = createAsyncThunk('movies/fetchMovies', async () => {
   const response = await getMovies()
   return response.data.results
})

//영화 상세정보 가져오기
export const fetchMovieDetails = createAsyncThunk('movies/fetchMovieDetails', async (movieId) => {
   const response = await getMovieDetails(movieId)
   return response.data
})
const movieSlice = createSlice({
   name: 'movies',
   initialState: {
      movies: [],
      movieDetails: [],
      loading: false,
      error: null,
   },
   reducers: {},
   //툴킷으로 API통신 할 때는 extraReducers를 쓴다구함..
   //extraReducers : 비동기액션(fetchMovies) 발생시 state를 바꿔줌
   extraReducers: (builder) => {
      builder
         // 데이터를 가져오는 동안
         .addCase(fetchMovies.pending, (state) => {
            state.loading = true
            state.error = null
         })
         // 데이터를 성공적으로 로드함
         .addCase(fetchMovies.fulfilled, (state, action) => {
            state.loading = false
            state.movies = action.payload
            // action.payload : fetchMovies에서 return된 response.data.results
         })
         // api 호출에 실패
         .addCase(fetchMovies.rejected, (state, action) => {
            state.loading = false
            state.error = action.error.message
         })
         .addCase(fetchMovieDetails.pending, (state) => {
            state.loading = true
            state.error = null // 다른 액션 생성자 함수에서 에러 발생시 에러 메시지가 남아 있는 경우를 대비해 초기화
         })
         .addCase(fetchMovieDetails.fulfilled, (state, action) => {
            state.loading = false
            state.movieDetails = action.payload
         })
         .addCase(fetchMovieDetails.rejected, (state, action) => {
            state.loading = false
            state.error = action.error.message
         })
   },
})

export default movieSlice.reducer
