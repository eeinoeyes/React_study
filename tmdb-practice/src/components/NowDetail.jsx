import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { fetchPlayingDetails } from '../features/playingSlice'

function NowDetail() {
   const programId = useParams().movieId

   const dispatch = useDispatch()
   useEffect(() => {
      if (programId) {
         dispatch(fetchPlayingDetails(programId))
      }
   }, [dispatch, programId])

   const { programDetails, loading, error } = useSelector((state) => state.playings)

   const genres = programDetails.genres.map((genre) => `${genre.name}`).join(', ')

   if (loading) return <p>로딩 중</p>
   if (error) return <p>error:{error}</p>

   return (
      <div style={{ padding: '20px' }}>
         {programDetails && (
            <div key={programId}>
               <h2>상영 중인 영화</h2>
               <div>
                  <img src={`https://image.tmdb.org/t/p/w400/${programDetails.poster_path}`} alt="poster" />
               </div>
               <h2>{programDetails.title}</h2>
               <h3>장르</h3>
               <p>{genres}</p>
               <h3>줄거리</h3>
               <p>{programDetails.overview}</p>
               <h3>평점</h3>
               <p>{programDetails.vote_average.toFixed(2)}</p>
            </div>
         )}
      </div>
   )
}

export default NowDetail
