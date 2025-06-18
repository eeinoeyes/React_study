import { useDispatch, useSelector } from 'react-redux'
import { fetchGenres } from '../features/genreSlice'
import { useEffect } from 'react'

function Genres() {
   const dispatch = useDispatch()
   useEffect(() => {
      dispatch(fetchGenres())
   }, [dispatch])
   const { genre, loading, error } = useSelector((state) => state.genres)
   //    console.log(genre)

   return (
      <div>
         <p>확인용 텍스트</p>
         <ul>
            {genre.map((item) => (
               <li key={item.id}>{item.name}</li>
            ))}
         </ul>
      </div>
   )
}

export default Genres
