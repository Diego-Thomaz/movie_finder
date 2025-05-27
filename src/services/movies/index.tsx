import axios from 'axios';

const getMovies = async (query: string, page: number = 1) => {
  const { data } = await axios.get(
    import.meta.env.VITE_API_URL, {
      params: {
        apikey: import.meta.env.VITE_API_KEY,
        s: query,
        page
      }
    });
  return data;
}

const getMovieById = async (movieId: string) => {
  const { data } = await axios.get(
    import.meta.env.VITE_API_URL, {
      params: {
        apikey: import.meta.env.VITE_API_KEY,
        i: movieId
      }
    }
  );
  return data;
}

export { getMovies, getMovieById };
