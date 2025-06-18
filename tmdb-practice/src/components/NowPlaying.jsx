import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchPlaying } from '../features/playingSlice'
import { Link } from 'react-router-dom'

function NowPlaying() {
   const dispatch = useDispatch()
   const { programs, loading, error } = useSelector((state) => state.playings)
   useEffect(() => {
      dispatch(fetchPlaying())
   }, [dispatch])

   if (loading) return <p>로딩 중</p>
   if (error) return <p>error: {error}</p>
   return (
      <div>
         <h1>상영 중인 영화</h1>
         <ul>
            {programs.map((program) => (
               <Link key={programs.id} to={`/detail/${program.id}`}>
                  <li key={program.id}>{program.title}</li>
               </Link>
            ))}
         </ul>
         <Link key="" to={`genres`}>
            <button>장르 목록 보기</button>
         </Link>
      </div>
   )
}

export default NowPlaying
