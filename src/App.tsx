import { Routes, Route } from 'react-router-dom';
import Movies from './pages/movies'
import MovieDetails from './pages/movieDetails'
import AboutPage from './pages/about'
import MovieNavbar from './components/movieNavbar';


function App() {

  return (
    <>
      <MovieNavbar/>
      <Routes>
        <Route path="/" element={<Movies />} />
        <Route path="/movie/:imdbID" element={<MovieDetails />} />
        <Route path="/about" element={<AboutPage />} />
      </Routes>
    </>
  )
}

export default App
