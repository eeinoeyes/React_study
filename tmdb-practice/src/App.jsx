import './App.css'
import { Routes, Route } from 'react-router-dom'
import NotFound from './components/NotFound'
import NowPlaying from './components/NowPlaying'
import NowDetail from './components/NowDetail'
import Genres from './components/Genres'

function App() {
   return (
      <Routes>
         <Route path="/" element={<NowPlaying />} />
         <Route path="/detail/:movieId" element={<NowDetail />} />
         <Route path="/*" element={<NotFound />} />
         <Route path="/genres" element={<Genres />} />
      </Routes>
   )
}

export default App
