import './App.css'
// import MovieList from './components/NonRedux/MovieList'
// import MovieUpcoming from './components/NonRedux/MovieUpcoming'

import MovieList2 from './components/UseRedux/MovieList'
import MovieDetail from './components/UseRedux/MovieDetail'
import NotFound from './components/UseRedux/NotFound'
import { Route, Routes } from 'react-router-dom'

function App() {
   // return <MovieList />
   // return <MovieUpcoming />
   return (
      <Routes>
         <Route path="/" element={<MovieList2 />} />
         <Route path="/detail/:movieId" element={<MovieDetail />} />
         <Route path="/*" element={<NotFound />} />
      </Routes>
   )
}

export default App
