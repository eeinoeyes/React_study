import axios from 'axios'

const BASE_URL = 'https://api.themoviedb.org/3'
const AUTH_KEY = import.meta.env.VITE_TMDB_API_KEY

const genreApi = axios.create({
   baseURL: BASE_URL,
   headers: {
      Accept: 'application/json',
      Authorization: `Bearer ${AUTH_KEY}`,
   },
})

export const getGenres = async (page = 1) => {
   const response = await genreApi.get('/genre/movie/list', {
      params: {
         language: 'ko-KR',
         page,
         region: 'KR',
      },
   })
   return response
}

export default genreApi
