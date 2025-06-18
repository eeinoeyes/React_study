import { useEffect, useState } from 'react'
import { getMovies } from '../../api/tmdbApi'

function MovieList() {
   const [movies, setMovies] = useState([]) // 응답받은 영화 목록
   const [loading, setLoading] = useState(true) // 로딩 여부
   const [error, setError] = useState(null) // 에러 메시지

   // useEffect 실행 시점 중요! 컴포넌트가 mount됐을 때 최초 1회 실행
   // 이때 API call 가능
   useEffect(() => {
      const fetchMovies = async () => {
         //밑에서 await 써야 하니까 내부에서 async로 함수 만들기
         try {
            const movieList = await getMovies()
            setMovies(movieList.data.results)
         } catch (error) {
            setError(error.message) // error state에 에러 메시지 저장
         } finally {
            setLoading(false) // loading 완료
         }
      }
      fetchMovies()
   }, [])

   if (loading) return <p>로딩 중 · · ·</p>
   //loading state가 true일 경우 로딩중 컴포넌트 렌더링

   if (error) return <p>Error: {error}</p>
   //error 발생시 error state = true, 에러 메시지 컴포넌트 렌더링

   // loading state가 flase면서 error state에 메시지가 없을 경우 영화 목록 컴포넌트 렌더링
   return (
      <div>
         <h1>인기영화 목록</h1>
         <ul>
            {movies.map((movie) => (
               <li key={movie.id}>{movie.title}</li>
            ))}
         </ul>
      </div>
   )
}

export default MovieList
