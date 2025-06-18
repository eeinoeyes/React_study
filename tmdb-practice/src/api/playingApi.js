import axios from 'axios'

const BASE_URL = 'https://api.themoviedb.org/3'
const AUTH_KEY = import.meta.env.VITE_TMDB_API_KEY

const playingApi = axios.create({
   baseURL: BASE_URL,
   headers: {
      Accept: 'application/json',
      Authorization: `Bearer ${AUTH_KEY}`,
   },
})

export const getPlaying = async (page = 1) => {
   const response = await playingApi.get('/movie/now_playing', {
      params: {
         language: 'ko-KR',
         page,
         region: 'KR',
      },
   })
   return response.data.results
}

export const getPlayingDetails = async (movieId) => {
   const response = await playingApi.get(`/movie/${movieId}`, {
      params: {
         language: 'ko-KR',
      },
   })
   return response.data
}

export default playingApi
