import axios from 'axios'

// TMDB API 기본 URL과 API 키 설정
const BASE_URL = 'https://api.themoviedb.org/3'
const AUTH_KEY = import.meta.env.VITE_TMDB_API_KEY

// axios 객체 생성
// create() 함수 실행 -> axios 객체 생성(tmdbApi) -> axios를 통해 API를 call
const tmdbApi = axios.create({
   baseURL: BASE_URL, // 똑같이 반복되는 URL
   headers: {
      accept: 'application/json', // JSON 객체로 결과값 받음
      Authorization: `Bearer ${AUTH_KEY}`, // 인증키
   },
})

// API를 통해 영화 목록을 가져오는 함수
export const getMovies = async (page = 1) => {
   const response = await tmdbApi.get('/movie/popular', {
      params: {
         language: 'ko-KR',
         page, //page: page
         region: 'KR',
      },
   })
   return response
}

// 영화 상세 정보 가져오기
export const getMovieDetails = async (movieId) => {
   const response = await tmdbApi.get(`/movie/${movieId}`, {
      params: {
         language: 'ko-KR',
      },
   })
   return response
}

// 개봉 예정 영화 가져오기
export const getUpcoming = async (page = 1) => {
   const response = await tmdbApi.get('/movie/upcoming', {
      params: {
         language: 'ko-KR',
         page,
         region: 'KR',
      },
   })
   return response
}

export default tmdbApi
