import axios from 'axios';

const getMovies = async (query: string) => {
  const { data } = await axios.get(`http://www.omdbapi.com/?apikey=${import.meta.env.VITE_API_KEY}&s=${query}`);
  return data;
}

export { getMovies };
