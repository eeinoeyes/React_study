import { useEffect, useState } from 'react'
import { getUpcoming } from '../../api/tmdbApi'

function MovieUpcoming() {
   const [movies, setMovies] = useState([])
   const [loading, setLoading] = useState(true)
   const [error, setError] = useState(null)

   useEffect(() => {
      const fetchMovies = async () => {
         try {
            const movieList = await getUpcoming()
            setMovies(movieList.data.results)
         } catch (error) {
            setError(error)
         } finally {
            setLoading(false)
         }
      }
      fetchMovies()
   }, [])

   if (loading) return <p>로딩 중 · · ·</p>
   if (error) return <p>Error: {error}</p>

   return (
      <div>
         <h1>개봉 예정 영화 목록</h1>
         {movies.map((movie) => (
            <li key={movie.id}>{movie.title}</li>
         ))}
      </div>
   )
}

export default MovieUpcoming
