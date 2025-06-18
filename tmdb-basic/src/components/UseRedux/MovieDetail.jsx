import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { fetchMovieDetails } from '../../features/movieSlice'

function MovieDetail() {
   const { movieId } = useParams() // path에 있는 movie ID를 가져옴
   const dispatch = useDispatch()

   useEffect(() => {
      if (movieId) {
         dispatch(fetchMovieDetails(movieId))
      }
   }, [dispatch, movieId])

   const { movieDetails, loading, error } = useSelector((state) => state.movies)
   if (loading) return <p>로딩 중</p>
   if (error) return <p>error:{error}</p>
   console.log(movieDetails)

   const genres = movieDetails.genres.map((genre) => `${genre.name}`).join(', ')

   return (
      <div style={{ padding: '20px' }}>
         {/* 
         mount되는 순간 movieDetail의 state: null
         mount가 이루어지고 난 후 useEffect 실행, movieDetail값도 이때 들어옴
         -> && 연산자를 이용해 movieDetail 값이 들어오고 난 후 컴포넌트를 렌더링하도록 설계
         */}
         {MovieDetail && (
            <div>
               <div>
                  <img src={`https://image.tmdb.org/t/p/w400/${movieDetails.poster_path}`} alt="" />
               </div>
               <div key={movieDetails.id}>
                  <h2>{movieDetails.title}</h2>
                  <h2>줄거리</h2>
                  <p>{movieDetails.overview}</p>
                  <h3>장르</h3>
                  <p>{genres}</p>
                  <h3>개봉일</h3>
                  <p>{movieDetails.release_date}</p>
                  <h3>평점</h3>
                  <p>{movieDetails.vote_average}</p>
               </div>
            </div>
         )}
      </div>
   )
}

export default MovieDetail
